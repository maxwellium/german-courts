import { competentCourtURL, request } from './request';
import { parse, Institution } from './parse';


export async function competentCourt(ort?: string, plz?: string): Promise<Institution[]> {
  const url = competentCourtURL(ort, plz),
    html = await request(url);
  return parse(html);
}
