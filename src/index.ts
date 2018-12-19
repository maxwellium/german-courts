import { competentCourtURL } from './lib/request';
import { parseSeiten, Seite } from './parts/seite';


export async function competentCourt( ort?: string, plz?: string ): Promise<Seite[]> {

  const url = competentCourtURL( ort, plz );

  return await parseSeiten( url );
}
