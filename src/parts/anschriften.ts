export interface Anschriften {
  lieferanschrift: string[],
  postanschrift: string[]
}

const ANSCHRIFTEN_MAP: { [ selector: string ]: keyof Anschriften } = {
  'Lieferanschrift:': 'lieferanschrift',
  'Postanschrift:': 'postanschrift'
};
const ANSCHRIFTEN_MAP_KEYS = Object.keys( ANSCHRIFTEN_MAP );

export function getAnschriften( $: CheerioStatic, td: CheerioElement ) {

  const anschriften: Anschriften = {
    lieferanschrift: [],
    postanschrift: []
  };

  const list = $( td )
    .contents()
    .toArray()
    .map( e => $( e ).text().trim() )
    .filter( s => s.length );

  let t: keyof Anschriften;

  for ( let s of list ) {
    if ( ANSCHRIFTEN_MAP_KEYS.includes( s ) ) {
      t = ANSCHRIFTEN_MAP[ s ];
      continue;
    }
    if ( t! ) {
      anschriften[ t ].push( s );
    }
  }

  return anschriften;
}