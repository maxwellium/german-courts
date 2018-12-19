"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anschriften_1 = require("./anschriften");
function parseResults($) {
    $('.adbbody table > tbody > tr.adbtr1, table > tbody > tr.adbtr2').each((i, e) => {
        const tds = $('td', e);
        if (3 !== tds.length) {
            return;
        }
        let b = {
            type: e.attribs.title,
            name: $('strong', tds[0]).text(),
            anschrift: anschriften_1.getAnschriften($, tds[1])
        };
        console.log(b);
    });
}
exports.parseResults = parseResults;
//# sourceMappingURL=results.js.map