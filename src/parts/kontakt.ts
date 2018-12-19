export interface Kontakt {
  Telefon?: string,
  Fax?: string,
  URL?: string,
  EMail?: string,
  XJustizId?: string
}


const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_ID = /^XJustiz-ID: (\w+)$/;
const REGEX_TEL = /^Telefon: (.+)$/;
const REGEX_FAX = /^Fax: (.+)$/;

export function getKontakt( $: CheerioStatic, td: CheerioElement ): Kontakt {

  const kontakt: Kontakt = {};

  if ( $( '.adbkleiner a', td ).length ) {
    kontakt.URL = $( '.adbkleiner a', td ).attr().href;
  }

  const list = $( td )
    .contents()
    .toArray()
    .map( e => $( e ).text().trim() )
    .filter( s => s.length );

  for ( let i = 0; i < list.length; i++ ) {

    const id = list[ i ].match( REGEX_ID );
    if ( id ) {
      kontakt.XJustizId = id[ 1 ];
    }
    const tel = list[ i ].match( REGEX_TEL );
    if ( tel ) {
      kontakt.Telefon = tel[ 1 ];
    }
    const fax = list[ i ].match( REGEX_FAX );
    if ( fax ) {
      kontakt.Fax = fax[ 1 ];
    }
    if (
      ( 'Mail:' === list[ i ] ) &&
      ( i < list.length - 1 ) &&
      isEmail( list[ i + 1 ] )
    ) {
      kontakt.EMail = list[ i + 1 ];
    }

  }

  return kontakt;
}

function isEmail( email: string ) {
  return REGEX_EMAIL.test( email.toLowerCase() );
}
