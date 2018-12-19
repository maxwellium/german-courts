"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const request_1 = require("../lib/request");
const institutionen_1 = require("./institutionen");
const selektion_1 = require("./selektion");
async function parseSeiten(url) {
    const html = await request_1.request(url);
    const results = [];
    const $ = cheerio_1.load(html);
    if ($('.adbbody table').length) {
        results.push({
            selektion: 'Alle',
            institutionen: institutionen_1.parseInstitutionen($)
        });
    }
    else if ($('.adbbody ul.adbul1 li').length) {
        const selektion = selektion_1.parseSelektion($);
        for (let { url, text } of selektion) {
            const html = await request_1.request(request_1.baseURL(url));
            const $ = cheerio_1.load(html);
            results.push({
                selektion: text,
                institutionen: institutionen_1.parseInstitutionen($)
            });
        }
    }
    return results;
}
exports.parseSeiten = parseSeiten;
//# sourceMappingURL=seite.js.map