var
  Request = require('request'),
  Ent     = require('ent');


function zuständigesGericht(){};
function BehördeIn(){};


var
  url     =
  'http://www.justizadressen.nrw.de/og.php',
  params  = {
    plz: '',
    ort: '',
    gerausw: 'ALL',
    plz1: '',
    landausw: 'ALL',
    suchen1: '+Absenden+',
    MD: ''
  },

  forwards  = [],
  errors    = [],
  empty     = [];


// orte = ['Hamburg'];


var request = function () {
  var ort = orte.pop();
  if ( 'undefined' === typeof ort ) {
    return done();
  }

  params.ort1 = ort;
  console.log('erfrage', ort);
  Request({uri: url, qs: params}, function (error, response, body) {
    if ( !error && response.statusCode == 200 ) {

      extractGerichte( body, ort );
      console.log('fertig', ort);
    } else {
      errors.push([error, response.statusCode, ort]);
    }
    if ( errors.length < 10 ) {
      request();
    } else {
      console.log('zu viele Fehler - Abbruch');
      done();
    }
  });
};


var extractGerichte = function(html, ort) {
  var
    gericht = {},
    parse = html,
    i     = 1,
    count = 0;

  while( -1 !== html.indexOf('<tr class="adbtr'+ i + '" >') ){
    html = extract(html, '<tr class="adbtr'+ i +'" >', '</tr>');
    parse = html[1];
    html = html[0];

    // console.log(html);

    gericht.Name = Ent.decode( extract(parse, 'headers="adbgericht">', '</td>')[1].trim() );

    gericht.Anschrift = extractAnschrift(parse);
    gericht.Kontakt = extractKontakt(parse);
    gericht.suchOrt = ort;

    if ( !gericht.Name.length || !gericht.Anschrift.Lieferanschrift.length ) {
      empty.push(ort);
    }

    forwards.push(gericht);

    gericht = {};
    count++;

    i = i === 1 ? 2 : 1;
  }

  if ( count === 0 ) {
    empty.push(ort);
  }
};

var extractAnschrift = function(html) {
  var anschrift = {
    Lieferanschrift : '',
    Postanschrift   : ''
  };

  html = extract(html, 'headers="adbgeranschr">', '</td>')[1]
    .replace('<br />', '\n')
    .replace(/(<[^>]+>)+/g, '\n')
    .trim()
    .split('\n');

  if ( 'Lieferanschrift:' === html[0] ) {
    anschrift.Lieferanschrift = Ent.decode( html[1].trim() );
    html.shift();
    html.shift();
  }
  if ( 'Postanschrift:' === html[0] ) {
    anschrift.Postanschrift = Ent.decode( html[1].trim() );
  }

  return anschrift;
};

var extractKontakt = function(html) {
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
      if ( -1 !== keys.indexOf(line.split(':')[0]) ) {
        start = false;
      }
      if ( start ){
        Kontakt[key] += (Kontakt[key].length ? ', ' : '') + line;
      } else if ( 0 === line.indexOf(key) ) {
        if ( true === Kontakt[key] ) {
          Kontakt[key] = Ent.decode( line.split(': ')[1].trim() );
        } else {
          start = true;
        }
      }
    });
    if ( 'string' !== typeof Kontakt[key] ) Kontakt[key] = '';
  });

  return Kontakt;
};

var extract = function(text, from, to) {
  var
    start = text.indexOf(from),
    end   = text.indexOf(to, start + from.length);

  if ( (end === -1) || (start === -1) ) {
    return [ text, '' ];
  } else {
    return [ text.substr(end + to.length) ,text.substring(start + from.length, end) ];
  }
};

var done = function() {
  // console.log(forwards);
  // console.log(errors);
  // console.log(empty);
};

request();
