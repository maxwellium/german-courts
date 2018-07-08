"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const REGEX_PARSER = {
    zeilen: /<tr class="adbtr[12]"[^<>]*?(title="\s*(.*)\s*")? ?>\s*([\d\D]+?)\s*<\/tr>/g,
    bezeichnung: /<td class="adbtd\d" headers="(adbgericht|adbfachger)">\s*([\d\D]+?)\s*<\/td>/,
    anschrift: {
        all: /<td class="adbtd\d" headers="(adbgeranschr|adbfganschr)">\s*([\d\D]+?)\s*<\/td>/,
        liefer: /Lieferanschrift:\s+(.+?)\s+Postanschrift:/,
        post: /Postanschrift:\s+(.+)/
    },
    kontakt: /<td class="adbtd\d" headers="(adbgerkontakt|adbfgkontakt)">\s*([\d\D]+?)\s*<\/td>/,
    zusatz: {
        clean: [
            /<span class="adbkleiner">.+?<\/span>/g
        ]
    }
};
exports.REGEX_PARSER = REGEX_PARSER;
const REGEX_EXTRACTORS = {
    plz: /(\d{4,5}) .+$/,
    ort: /\d{4,5} (.+)$/,
    adresse: /^(.+)(?=, \d{4,5}.+)/,
    telefon: /Telefon:\s*([0-9\s-]+)/,
    fax: /Fax:\s*([0-9\s-]+)/,
    url: /URL:\s*<.*?>([\w\d.\-\/?=&%]+)/,
    mail: /Mail:\s*<.*?>([\w\d.\-@]+)/,
    xjustiz: /XJustiz-ID:\s*([\w\d]+)/,
    typ: /(Oberlandesgericht|Amtsgericht|Landgericht|Arbeitsgericht|Landesarbeitsgericht|Bundesarbeitsgericht|Finanzgericht|Bundesfinanzhof|Verwaltungsgericht|Oberverwaltungsgericht|Bundesverwaltungsgericht|Sozialgericht|Landessozialgericht|Bundessozialgericht|Staatsanwaltschaft|Generalstaatsanwaltschaft|Bundesverfassungsgericht|Bundesgerichtshof|Der Generalbundesanwalt beim Bundesgerichtshof|Justizvollzugsanstalt)/,
    postfach: /Postfach\s+([\d ]+),/
};
const Extractors = {};
exports.Extractors = Extractors;
for (let key in REGEX_EXTRACTORS) {
    Extractors[key] = (string) => {
        REGEX_EXTRACTORS[key].lastIndex = 0;
        const match = REGEX_EXTRACTORS[key].exec(string);
        if (match && (match.length > 1)) {
            return match[1];
        }
        else {
            return '';
        }
    };
}
//# sourceMappingURL=extract.js.map