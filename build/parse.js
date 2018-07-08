"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extract_1 = require("./extract");
const decode_1 = require("./decode");
class Institution {
    constructor() {
        this.typ = '';
        this.bezeichnung = '';
        this.gerichtstyp = '';
        this.fachgericht = false;
        this.zusatz = '';
        this.anschrift = {
            Lieferanschrift: {
                all: '',
                PLZ: '',
                Ort: '',
                Adresse: ''
            },
            Postanschrift: {
                all: '',
                PLZ: '',
                Ort: '',
                Postfach: ''
            }
        };
        this.kontakt = {
            Telefon: '',
            Fax: '',
            URL: '',
            EMail: '',
            XJustizId: ''
        };
    }
}
exports.Institution = Institution;
function parse(html) {
    const results = [];
    let zeile, institution;
    extract_1.REGEX_PARSER.zeilen.lastIndex = 0;
    while (zeile = extract_1.REGEX_PARSER.zeilen.exec(html)) {
        institution = parseZeile(zeile);
        if (institution) {
            results.push(institution);
        }
    }
    return results;
}
exports.parse = parse;
;
function parseZeile(zeile) {
    const institution = new Institution();
    if (4 !== zeile.length) {
        return false;
    }
    if (zeile[2] && zeile[2].length) {
        institution.typ = decode_1.decode(zeile[2]);
    }
    extract_1.REGEX_PARSER.bezeichnung.lastIndex = 0;
    let description = extract_1.REGEX_PARSER.bezeichnung.exec(zeile[3]);
    institution.gerichtstyp = extract_1.Extractors.typ(description);
    if ((null === description) || (3 !== description.length)) {
        return false;
    }
    if ('adbfachger' === description[1]) {
        institution.fachgericht = true;
    }
    let descriptionArray = description[2].split('<br />');
    if (1 < descriptionArray.length) {
        let institutionAdditional = [...descriptionArray];
        institutionAdditional.shift();
        institution.zusatz = institutionAdditional.join('\n');
        extract_1.REGEX_PARSER.zusatz.clean.forEach(function (clean) {
            institution.zusatz = institution.zusatz.replace(clean, '');
        });
        institution.zusatz = decode_1.decode(institution.zusatz).trim();
    }
    institution.bezeichnung = decode_1.decode(descriptionArray[0]).trim();
    extract_1.REGEX_PARSER.anschrift.all.lastIndex = 0;
    let address = extract_1.REGEX_PARSER.anschrift.all.exec(zeile[3]);
    if (address && (3 === address.length)) {
        let addressAll = address[2]
            .replace('<br />', '\n')
            .replace(/(<[^>]+>)+/g, '\n')
            .trim();
        extract_1.REGEX_PARSER.anschrift.liefer.lastIndex = 0;
        extract_1.REGEX_PARSER.anschrift.post.lastIndex = 0;
        let addressDelivery = extract_1.REGEX_PARSER.anschrift.liefer.exec(addressAll);
        let addressPost = extract_1.REGEX_PARSER.anschrift.post.exec(addressAll);
        if (addressDelivery && (2 === addressDelivery.length)) {
            let addressDeliveryAll = decode_1.decode(addressDelivery[1]).trim();
            institution.anschrift.Lieferanschrift.PLZ = extract_1.Extractors.plz(addressDeliveryAll);
            institution.anschrift.Lieferanschrift.Ort = extract_1.Extractors.ort(addressDeliveryAll);
            institution.anschrift.Lieferanschrift.Adresse = extract_1.Extractors.adresse(addressDeliveryAll);
        }
        if (addressPost && (2 === addressPost.length)) {
            let addressPostAll = decode_1.decode(addressPost[1]).trim();
            institution.anschrift.Postanschrift.PLZ = extract_1.Extractors.plz(addressPostAll);
            institution.anschrift.Postanschrift.Ort = extract_1.Extractors.ort(addressPostAll);
            institution.anschrift.Postanschrift.Postfach = extract_1.Extractors.postfach(addressPostAll);
        }
    }
    extract_1.REGEX_PARSER.kontakt.lastIndex = 0;
    let contact = extract_1.REGEX_PARSER.kontakt.exec(zeile[3]);
    if (contact && (3 === contact.length)) {
        let contactAll = decode_1.decode(contact[2]).trim();
        institution.kontakt.Telefon = extract_1.Extractors.telefon(contactAll);
        institution.kontakt.Fax = extract_1.Extractors.fax(contactAll);
        institution.kontakt.URL = extract_1.Extractors.url(contactAll);
        institution.kontakt.EMail = extract_1.Extractors.mail(contactAll);
        institution.kontakt.XJustizId = extract_1.Extractors.xjustiz(contactAll);
    }
    return institution;
}
;
//# sourceMappingURL=parse.js.map