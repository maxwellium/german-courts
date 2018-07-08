/// <reference types="node" />
import { RequestOptions } from 'http';
import { URL } from 'url';
export declare function competentCourtURL(ort?: string, plz?: string): URL;
export declare function request(url: string | RequestOptions | URL): Promise<string>;
