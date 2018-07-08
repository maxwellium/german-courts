import { Extractors, REGEX_PARSER } from './extract';
import { decode } from './decode';

export class Institution {
  typ: string = '';
  bezeichnung: string = '';
  gerichtstyp: string = '';
  fachgericht: boolean = false;
  zusatz: string = '';
  anschrift = {
    Lieferanschrift: {
      all: '',
      PLZ: '',
      Ort: '',
      Adresse: ''
    },
    Postanschrift: {
      all: '',
      PLZ: '',
      Ort: '',
      Postfach: ''
    }
  };
  kontakt = {
    Telefon: '',
    Fax: '',
    URL: '',
    EMail: '',
    XJustizId: ''
  };
}


export function parse(html: string) {
  const results: Institution[] = [];
  let zeile: RegExpExecArray | null, institution;


  REGEX_PARSER.zeilen.lastIndex = 0;

  while (zeile = REGEX_PARSER.zeilen.exec(html)) {
    institution = parseZeile(zeile);
    if (institution) {
      results.push(<Institution>institution);
    }
  }

  return results;
};


function parseZeile(zeile: RegExpExecArray) {
  const institution = new Institution();

  if (4 !== zeile.length) { return false; }

  if (zeile[2] && zeile[2].length) {
    institution.typ = decode(zeile[2]);
  }

  REGEX_PARSER.bezeichnung.lastIndex = 0;
  let description = REGEX_PARSER.bezeichnung.exec(zeile[3]);

  institution.gerichtstyp = Extractors.typ(description);

  if ((null === description) || (3 !== description.length)) {
    return false;
  }
  if ('adbfachger' === description[1]) {
    institution.fachgericht = true;
  }
  let descriptionArray = description[2].split('<br />');
  if (1 < descriptionArray.length) {
    let institutionAdditional = [...descriptionArray];
    institutionAdditional.shift();
    institution.zusatz = institutionAdditional.join('\n');

    REGEX_PARSER.zusatz.clean.forEach(function (clean) {
      institution.zusatz = institution.zusatz.replace(clean, '');
    });
    institution.zusatz = decode(institution.zusatz).trim();
  }
  institution.bezeichnung = decode(descriptionArray[0]).trim();

  REGEX_PARSER.anschrift.all.lastIndex = 0;
  let address = REGEX_PARSER.anschrift.all.exec(zeile[3]);

  if (address && (3 === address.length)) {
    let addressAll = address[2]
      .replace('<br />', '\n')
      .replace(/(<[^>]+>)+/g, '\n')
      .trim();

    REGEX_PARSER.anschrift.liefer.lastIndex = 0;
    REGEX_PARSER.anschrift.post.lastIndex = 0;

    let addressDelivery = REGEX_PARSER.anschrift.liefer.exec(addressAll);
    let addressPost = REGEX_PARSER.anschrift.post.exec(addressAll);

    if (addressDelivery && (2 === addressDelivery.length)) {
      let addressDeliveryAll = decode(addressDelivery[1]).trim();
      institution.anschrift.Lieferanschrift.PLZ = Extractors.plz(addressDeliveryAll);
      institution.anschrift.Lieferanschrift.Ort = Extractors.ort(addressDeliveryAll);
      institution.anschrift.Lieferanschrift.Adresse = Extractors.adresse(addressDeliveryAll);
    }

    if (addressPost && (2 === addressPost.length)) {
      let addressPostAll = decode(addressPost[1]).trim();
      institution.anschrift.Postanschrift.PLZ = Extractors.plz(addressPostAll);
      institution.anschrift.Postanschrift.Ort = Extractors.ort(addressPostAll);
      institution.anschrift.Postanschrift.Postfach = Extractors.postfach(addressPostAll);
    }

  }


  REGEX_PARSER.kontakt.lastIndex = 0;
  let contact = REGEX_PARSER.kontakt.exec(zeile[3]);
  if (contact && (3 === contact.length)) {
    let contactAll = decode(contact[2]).trim();
    institution.kontakt.Telefon = Extractors.telefon(contactAll);
    institution.kontakt.Fax = Extractors.fax(contactAll);
    institution.kontakt.URL = Extractors.url(contactAll);
    institution.kontakt.EMail = Extractors.mail(contactAll);
    institution.kontakt.XJustizId = Extractors.xjustiz(contactAll);
  }

  return institution;
};
