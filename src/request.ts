import { get, RequestOptions } from 'http';
import { URL, URLSearchParams } from 'url';


const URL_BASE = 'http://www.justizadressen.nrw.de/og.php',
  PARAMS_DEFAULT = {
    'gerausw': 'ALL',
    suchen: '+Absenden+'
  };


export function competentCourtURL(ort?: string, plz?: string) {
  const params = {
    ...PARAMS_DEFAULT,
    ort, plz
  };

  const url = new URL(URL_BASE);

  url.search = (new URLSearchParams(params)).toString();

  return url;
}


export function request(url: string | RequestOptions | URL): Promise<string> {
  return new Promise((resolve, reject) => {
    get(url, response => {

      const { statusCode } = response;

      if (statusCode !== 200) {
        response.resume();
        reject(`Request Failed.\n Status Code: ${statusCode}`);
        return;
      }

      response.setEncoding('utf8');

      let rawData = '';
      response.on('data', chunk => rawData += chunk);
      response.on('end', () => resolve(rawData));

    }).on('error', reject);
  });
}

