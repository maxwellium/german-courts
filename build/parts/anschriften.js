"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ANSCHRIFTEN_MAP = {
    'Lieferanschrift:': 'lieferanschrift',
    'Postanschrift:': 'postanschrift'
};
const ANSCHRIFTEN_MAP_KEYS = Object.keys(ANSCHRIFTEN_MAP);
function getAnschriften($, td) {
    const anschriften = {
        lieferanschrift: [],
        postanschrift: []
    };
    const list = $(td)
        .contents()
        .toArray()
        .map(e => $(e).text().trim())
        .filter(s => s.length);
    let t;
    for (let s of list) {
        if (ANSCHRIFTEN_MAP_KEYS.includes(s)) {
            t = ANSCHRIFTEN_MAP[s];
            continue;
        }
        if (t) {
            anschriften[t].push(s);
        }
    }
    return anschriften;
}
exports.getAnschriften = getAnschriften;
//# sourceMappingURL=anschriften.js.map