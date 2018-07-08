export declare class Institution {
    typ: string;
    bezeichnung: string;
    gerichtstyp: string;
    fachgericht: boolean;
    zusatz: string;
    anschrift: {
        Lieferanschrift: {
            all: string;
            PLZ: string;
            Ort: string;
            Adresse: string;
        };
        Postanschrift: {
            all: string;
            PLZ: string;
            Ort: string;
            Postfach: string;
        };
    };
    kontakt: {
        Telefon: string;
        Fax: string;
        URL: string;
        EMail: string;
        XJustizId: string;
    };
}
export declare function parse(html: string): Institution[];
