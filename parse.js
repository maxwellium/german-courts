var
  Ent     = require('ent'),
  Extract = require('./extract'),


  regex   = {
    zeilen      : /<tr class="adbtr[12]"[^<>]*?(title="\s*(.*)\s*")? ?>\s*([\d\D]+?)\s*<\/tr>/g,
    bezeichnung : /<td class="adbtd\d" headers="(adbgericht|adbfachger)">\s*([\d\D]+?)\s*<\/td>/,
    anschrift   : /<td class="adbtd\d" headers="(adbgeranschr|adbfganschr)">\s*([\d\D]+?)\s*<\/td>/,
    kontakt     : /<td class="adbtd\d" headers="(adbgerkontakt|adbfgkontakt)">\s*([\d\D]+?)\s*<\/td>/,
    zusatz      : {
      clean : [
        /<span class="adbkleiner">.+?<\/span>/g
      ]
    }
  };

module.exports = function(html){
  var
    results = [],
    zeile, institution;


  regex.zeilen.lastIndex = 0;

  while( zeile = regex.zeilen.exec(html) ){
    institution = parseZeile(zeile);
    if( institution ){
      results.push(institution);
    }
  }

  return results;
};

var parseZeile = function(zeile){
  var institution = {};

  if( 4 !== zeile.length ){
    return false;
  }

  if( zeile[2] && zeile[2].length ){
    institution.typ = Ent.decode( zeile[2] );
  }

  regex.bezeichnung.lastIndex = 0;

  institution.bezeichnung = regex.bezeichnung.exec(zeile[3]);
  if( (null === institution.bezeichnung) || (3 !== institution.bezeichnung.length) ){
    return false;
  }
  if( 'adbfachger' === institution.bezeichnung[1] ){
    institution.fachgericht = true;
  }
  institution.bezeichnung = institution.bezeichnung[2].split('<br />');
  if( 1 < institution.bezeichnung.length ){
    institution.zusatz = [].concat( institution.bezeichnung );
    institution.zusatz.shift();
    institution.zusatz = institution.zusatz.join('\n');
    regex.zusatz.clean.forEach(function(clean){
      institution.zusatz = institution.zusatz.replace(clean, '');
    });
    institution.zusatz = Ent.decode( institution.zusatz ).trim();
  }
  institution.bezeichnung = Ent.decode( institution.bezeichnung[0] ).trim();

  return institution;
};

/*
var extractAnschrift = function(html){
  var anschrift = {
    Lieferanschrift : '',
    Postanschrift   : ''
  };

  html = extract(html, 'headers="adbgeranschr">', '</td>')[1]
    .replace('<br />', '\n')
    .replace(/(<[^>]+>)+/g, '\n')
    .trim()
    .split('\n');

  if( 'Lieferanschrift:' === html[0] ){
    anschrift.Lieferanschrift = Ent.decode( html[1].trim() );
    html.shift();
    html.shift();
  }
  if( 'Postanschrift:' === html[0] ){
    anschrift.Postanschrift = Ent.decode( html[1].trim() );
  }

  return anschrift;
};

var extractKontakt = function(html){
  var Kontakt = {
    Telefon : true,
    Fax     : true,
    URL     : '',
    Mail    : ''
  }, keys;

  Kontakt['XJustiz-ID'] = true;

  html = extract(html, 'headers="adbgerkontakt">', '</td>')[1]
    .replace('<br />', '\n')
    .replace(/(<[^>]+>)+/g, '\n')
    .trim()
    .split('\n');

  keys = Object.keys(Kontakt);

  keys.forEach(function(key){
    var start = false;
    html.forEach(function(line){
      if( -1 !== keys.indexOf(line.split(':')[0]) ){
        start = false;
      }
      if( start ){
        Kontakt[key] += (Kontakt[key].length ? ', ' : '') + line;
      } else if( 0 === line.indexOf(key) ){
        if( true === Kontakt[key] ){
          Kontakt[key] = Ent.decode( line.split(': ')[1].trim() );
        } else {
          start = true;
        }
      }
    });
    if( 'string' !== typeof Kontakt[key] ) Kontakt[key] = '';
  });

  return Kontakt;
};

var extract = function(text, from, to){
  var
    start = text.indexOf(from),
    end   = text.indexOf(to, start + from.length);

  if( (end === -1) || (start === -1) ){
    return [ text, '' ];
  } else {
    return [ text.substr(end + to.length), text.substring(start + from.length, end) ];
  }
};


*/