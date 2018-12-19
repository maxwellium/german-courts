"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anschriften_1 = require("./anschriften");
const kontakt_1 = require("./kontakt");
function parseInstitutionen($) {
    const institutionen = [];
    $('.adbbody table > tbody > tr.adbtr1, table > tbody > tr.adbtr2').each((i, e) => {
        const tds = $('td', e);
        if (3 !== tds.length) {
            return;
        }
        institutionen.push({
            type: e.attribs.title,
            name: $('strong', tds[0]).text(),
            anschriften: anschriften_1.getAnschriften($, tds[1]),
            kontakt: kontakt_1.getKontakt($, tds[2])
        });
    });
    return institutionen;
}
exports.parseInstitutionen = parseInstitutionen;
//# sourceMappingURL=institutionen.js.map