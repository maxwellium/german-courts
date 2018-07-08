const ENTITIES: { [e: string]: string } = {
  'amp': '&',
  'apos': '\'',
  '#x27': '\'',
  '#x2F': '/',
  '#39': '\'',
  '#47': '/',
  'lt': '<',
  'gt': '>',
  'nbsp': ' ',
  'quot': '"'
};


export function decode(text: string) {
  text = text.replace(/<(?:.|\n)*?>/gm, '');
  return text.replace(/&([^;]+);/gm, function (match, entity) {
    return ENTITIES[entity] || match
  });
}
