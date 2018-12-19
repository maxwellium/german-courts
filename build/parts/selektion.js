"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseSelektion($) {
    const selektion = [];
    $('.adbbody ul.adbul1 li.extern a').each((i, e) => selektion.push({
        url: e.attribs.href,
        text: $(e).text()
    }));
    $('.adbbody ul.adbul1 li.extern-weitere a').each((i, e) => selektion.push({
        url: e.attribs.href,
        text: 'Andere'
    }));
    return selektion;
}
exports.parseSelektion = parseSelektion;
//# sourceMappingURL=selektion.js.map