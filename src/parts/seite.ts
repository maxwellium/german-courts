import { URL } from 'url';

import { load } from 'cheerio';

import { request, baseURL } from '../lib/request';
import { parseInstitutionen, Institution } from './institutionen';
import { parseSelektion } from './selektion';


export interface Seite {
  selektion: string,
  institutionen: Institution[]
}


export async function parseSeiten( url: string | URL ) {
  const html = await request( url );

  const results: Seite[] = [];

  const $ = load( html );

  if ( $( '.adbbody table' ).length ) {
    results.push( {
      selektion: 'Alle',
      institutionen: parseInstitutionen( $ )
    } );
  } else if ( $( '.adbbody ul.adbul1 li' ).length ) {
    const selektion = parseSelektion( $ );
    for ( let { url, text } of selektion ) {
      const html = await request( baseURL( url ) );
      const $ = load( html );
      results.push( {
        selektion: text,
        institutionen: parseInstitutionen( $ )
      } );
    }
  }

  return results;
}
