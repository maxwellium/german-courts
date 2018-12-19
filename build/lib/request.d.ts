/// <reference types="node" />
import { RequestOptions } from 'https';
import { URL } from 'url';
export declare function competentCourtURL(ort?: string, plz?: string): URL;
export declare function request(url: string | RequestOptions | URL): Promise<string>;
export declare function baseURL(path?: string): string;
