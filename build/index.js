"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./lib/request");
const seite_1 = require("./parts/seite");
async function competentCourt(ort, plz) {
    const url = request_1.competentCourtURL(ort, plz);
    return await seite_1.parseSeiten(url);
}
exports.competentCourt = competentCourt;
//# sourceMappingURL=index.js.map