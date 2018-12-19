/// <reference types="cheerio" />
import { Anschriften } from './anschriften';
import { Kontakt } from './kontakt';
export interface Institution {
    type: string;
    name: string;
    anschriften: Anschriften;
    kontakt: Kontakt;
}
export declare function parseInstitutionen($: CheerioStatic): Institution[];
