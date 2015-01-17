var
  HE     = require('he'),
  Extract = require('./extract'),


  regex   = {
    zeilen      : /<tr class="adbtr[12]"[^<>]*?(title="\s*(.*)\s*")? ?>\s*([\d\D]+?)\s*<\/tr>/g,
    bezeichnung : /<td class="adbtd\d" headers="(adbgericht|adbfachger)">\s*([\d\D]+?)\s*<\/td>/,
    anschrift   : {
      all     : /<td class="adbtd\d" headers="(adbgeranschr|adbfganschr)">\s*([\d\D]+?)\s*<\/td>/,
      liefer  : /Lieferanschrift:\s+(.+?)\s+Postanschrift:/,
      post    : /Postanschrift:\s+(.+)/
    },
    kontakt     : /<td class="adbtd\d" headers="(adbgerkontakt|adbfgkontakt)">\s*([\d\D]+?)\s*<\/td>/,
    zusatz      : {
      clean : [
        /<span class="adbkleiner">.+?<\/span>/g
      ]
    }
  };

module.exports = function(html) {
  var
    results = [],
    zeile, institution;


  regex.zeilen.lastIndex = 0;

  while( zeile = regex.zeilen.exec(html) ) {
    institution = parseZeile(zeile);
    if ( institution ) {
      results.push(institution);
    }
  }

  return results;
};

var parseZeile = function(zeile) {
  var institution = {};

  if ( 4 !== zeile.length ) {
    return false;
  }

  if ( zeile[2] && zeile[2].length ) {
    institution.typ = HE.decode( zeile[2] );
  }

  regex.bezeichnung.lastIndex = 0;
  institution.bezeichnung = regex.bezeichnung.exec(zeile[3]);

  institution.gerichtstyp = Extract.typ(institution.bezeichnung);

  if ( (null === institution.bezeichnung) || (3 !== institution.bezeichnung.length) ) {
    return false;
  }
  if ( 'adbfachger' === institution.bezeichnung[1] ) {
    institution.fachgericht = true;
  }
  institution.bezeichnung = institution.bezeichnung[2].split('<br />');
  if ( 1 < institution.bezeichnung.length ) {
    institution.zusatz = [].concat( institution.bezeichnung );
    institution.zusatz.shift();
    institution.zusatz = institution.zusatz.join('\n');
    regex.zusatz.clean.forEach(function(clean) {
      institution.zusatz = institution.zusatz.replace(clean, '');
    });
    institution.zusatz = HE.decode( institution.zusatz ).trim();
  }
  institution.bezeichnung = HE.decode( institution.bezeichnung[0] ).trim();

  regex.anschrift.all.lastIndex = 0;
  institution.anschrift = regex.anschrift.all.exec(zeile[3]);
  if ( institution.anschrift && (3 === institution.anschrift.length) ) {
    institution.anschrift = {
      all : institution.anschrift[2]
        .replace('<br />', '\n')
        .replace(/(<[^>]+>)+/g, '\n')
        .trim()
    };

    regex.anschrift.liefer.lastIndex = 0;
    regex.anschrift.post.lastIndex = 0;

    institution.anschrift.Lieferanschrift = regex.anschrift.liefer.exec( institution.anschrift.all );
    institution.anschrift.Postanschrift   = regex.anschrift.post.exec( institution.anschrift.all );

    if ( institution.anschrift.Lieferanschrift && (2 === institution.anschrift.Lieferanschrift.length) ) {
      institution.anschrift.Lieferanschrift = {
        all: HE.decode( institution.anschrift.Lieferanschrift[1] ).trim()
      };
      institution.anschrift.Lieferanschrift.PLZ = Extract.plz( institution.anschrift.Lieferanschrift.all );
      institution.anschrift.Lieferanschrift.Ort = Extract.ort( institution.anschrift.Lieferanschrift.all );
      institution.anschrift.Lieferanschrift.Adresse = Extract.adresse( institution.anschrift.Lieferanschrift.all );
    } else {
      institution.anschrift.Lieferanschrift = '';
    }

    if ( institution.anschrift.Postanschrift && (2 === institution.anschrift.Postanschrift.length) ) {
      institution.anschrift.Postanschrift = {
        all: HE.decode( institution.anschrift.Postanschrift[1] ).trim()
      };
      institution.anschrift.Postanschrift.PLZ = Extract.plz( institution.anschrift.Postanschrift.all );
      institution.anschrift.Postanschrift.Ort = Extract.ort( institution.anschrift.Postanschrift.all );
      institution.anschrift.Postanschrift.Postfach = Extract.postfach( institution.anschrift.Postanschrift.all );
    } else {
      institution.anschrift.Postanschrift = '';
    }

    delete institution.anschrift.all;

  } else {
    institution.anschrift = '';
  }


  regex.kontakt.lastIndex = 0;
  institution.kontakt = regex.kontakt.exec( zeile[3] );
  if ( institution.kontakt && (3 === institution.kontakt.length) ) {
    institution.kontakt = {
      all: HE.decode( institution.kontakt[2] ).trim()
    };
    institution.kontakt.Telefon = Extract.telefon( institution.kontakt.all );
    institution.kontakt.Fax = Extract.fax( institution.kontakt.all );
    institution.kontakt.URL = Extract.url( institution.kontakt.all );
    institution.kontakt.EMail = Extract.mail( institution.kontakt.all );
    institution.kontakt.XJustizId = Extract.xjustiz( institution.kontakt.all );

    delete institution.kontakt.all;
  } else {
    institution.kontakt = '';
  }

  return institution;
};
