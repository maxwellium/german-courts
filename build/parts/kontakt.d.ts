/// <reference types="cheerio" />
export interface Kontakt {
    Telefon?: string;
    Fax?: string;
    URL?: string;
    EMail?: string;
    XJustizId?: string;
}
export declare function getKontakt($: CheerioStatic, td: CheerioElement): Kontakt;
