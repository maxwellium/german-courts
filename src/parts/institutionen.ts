import { getAnschriften, Anschriften } from './anschriften';
import { getKontakt, Kontakt } from './kontakt';


export interface Institution {
  type: string,
  name: string,
  anschriften: Anschriften,
  kontakt: Kontakt
}

export function parseInstitutionen( $: CheerioStatic ) {

  const institutionen: Institution[] = [];

  $( '.adbbody table > tbody > tr.adbtr1, table > tbody > tr.adbtr2' ).each( ( i, e ) => {

    const tds = $( 'td', e );

    if ( 3 !== tds.length ) { return }


    institutionen.push( {
      type: e.attribs.title,
      name: $( 'strong', tds[ 0 ] ).text().trim(),
      anschriften: getAnschriften( $, tds[ 1 ] ),
      kontakt: getKontakt( $, tds[ 2 ] )
    } );


  } );

  return institutionen;
}
