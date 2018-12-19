export function parseSelektion( $: CheerioStatic ) {

  const selektion: { text: string, url: string }[] = [];

  $( '.adbbody ul.adbul1 li.extern a' ).each( ( i, e ) => selektion.push( {
    url: e.attribs.href,
    text: $( e ).text()
  } ) );

  $( '.adbbody ul.adbul1 li.extern-weitere a' ).each( ( i, e ) => selektion.push( {
    url: e.attribs.href,
    text: 'Andere'
  } ) );

  return selektion;
}
