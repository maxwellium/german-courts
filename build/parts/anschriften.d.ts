/// <reference types="cheerio" />
export interface Anschriften {
    lieferanschrift: string[];
    postanschrift: string[];
}
export declare function getAnschriften($: CheerioStatic, td: CheerioElement): Anschriften;
