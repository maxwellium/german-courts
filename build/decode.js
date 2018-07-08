"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ENTITIES = {
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
function decode(text) {
    text = text.replace(/<(?:.|\n)*?>/gm, '');
    return text.replace(/&([^;]+);/gm, function (match, entity) {
        return ENTITIES[entity] || match;
    });
}
exports.decode = decode;
//# sourceMappingURL=decode.js.map