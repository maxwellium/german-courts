"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const parse_1 = require("./parse");
async function competentCourt(ort, plz) {
    const url = request_1.competentCourtURL(ort, plz), html = await request_1.request(url);
    return parse_1.parse(html);
}
exports.competentCourt = competentCourt;
//# sourceMappingURL=index.js.map