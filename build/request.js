"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const URL_BASE = 'http://www.justizadressen.nrw.de/og.php', PARAMS_DEFAULT = {
    'gerausw': 'ALL',
    suchen: '+Absenden+'
};
function competentCourtURL(ort, plz) {
    const params = Object.assign({}, PARAMS_DEFAULT, { ort, plz });
    const url = new url_1.URL(URL_BASE);
    url.search = (new url_1.URLSearchParams(params)).toString();
    return url;
}
exports.competentCourtURL = competentCourtURL;
function request(url) {
    return new Promise((resolve, reject) => {
        http_1.get(url, response => {
            const { statusCode } = response;
            if (statusCode !== 200) {
                response.resume();
                reject(`Request Failed.\n Status Code: ${statusCode}`);
                return;
            }
            response.setEncoding('utf8');
            let rawData = '';
            response.on('data', chunk => rawData += chunk);
            response.on('end', () => resolve(rawData));
        }).on('error', reject);
    });
}
exports.request = request;
//# sourceMappingURL=request.js.map