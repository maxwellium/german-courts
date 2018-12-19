"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_ID = /^XJustiz-ID: (\w+)$/;
const REGEX_TEL = /^Telefon: (.+)$/;
const REGEX_FAX = /^Fax: (.+)$/;
function getKontakt($, td) {
    const kontakt = {};
    if ($('.adbkleiner a', td).length) {
        kontakt.URL = $('.adbkleiner a', td).attr().href;
    }
    const list = $(td)
        .contents()
        .toArray()
        .map(e => $(e).text().trim())
        .filter(s => s.length);
    for (let i = 0; i < list.length; i++) {
        const id = list[i].match(REGEX_ID);
        if (id) {
            kontakt.XJustizId = id[1];
        }
        const tel = list[i].match(REGEX_TEL);
        if (tel) {
            kontakt.Telefon = tel[1];
        }
        const fax = list[i].match(REGEX_FAX);
        if (fax) {
            kontakt.Fax = fax[1];
        }
        if (('Mail:' === list[i]) &&
            (i < list.length - 1) &&
            isEmail(list[i + 1])) {
            kontakt.EMail = list[i + 1];
        }
    }
    return kontakt;
}
exports.getKontakt = getKontakt;
function isEmail(email) {
    return REGEX_EMAIL.test(email.toLowerCase());
}
//# sourceMappingURL=kontakt.js.map