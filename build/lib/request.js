"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
const url_1 = require("url");
const URL_BASE = 'https://www.justizadressen.nrw.de/og.php', PARAMS_DEFAULT = {
    gerausw: 'ALL',
    suchen: 'Abschicken'
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
        https_1.get(url, response => {
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
function baseURL(path = '') {
    return URL_BASE + path;
}
exports.baseURL = baseURL;
//# sourceMappingURL=request.js.map