/// <reference types="node" />
import { URL } from 'url';
import { Institution } from './institutionen';
export interface Seite {
    selektion: string;
    institutionen: Institution[];
}
export declare function parseSeiten(url: string | URL): Promise<Seite[]>;
