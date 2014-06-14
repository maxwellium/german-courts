var
  regex = {
    plz       : /(\d{4,5}) .+$/,
    ort       : /\d{4,5} (.+)$/,
    adresse   : /^(.+)(?=, \d{4,5}.+)/,
    telefon   : /Telefon:\s*([0-9\s-]+)/,
    fax       : /Fax:\s*([0-9\s-]+)/,
    url       : /URL:\s*<.*?>([\w\d.\-\/?=&%]+)/,
    mail      : /Mail:\s*<.*?>([\w\d.\-@]+)/,
    xjustiz   : /XJustiz-ID:\s*([\w\d]+)/,
    typ       : /(Oberlandesgericht|Amtsgericht|Landgericht|Arbeitsgericht|Landesarbeitsgericht|Bundesarbeitsgericht|Finanzgericht|Bundesfinanzhof|Verwaltungsgericht|Oberverwaltungsgericht|Bundesverwaltungsgericht|Sozialgericht|Landessozialgericht|Bundessozialgericht|Staatsanwaltschaft|Generalstaatsanwaltschaft|Bundesverfassungsgericht|Bundesgerichtshof|Der Generalbundesanwalt beim Bundesgerichtshof|Justizvollzugsanstalt)/,
    postfach  : /Postfach\s+([\d ]+),/
  },

  extract = function(regex, string) {
    regex.lastIndex = 0;
    var match = regex.exec(string);

    if ( match && (match.length > 1) ) {
      return match[1];
    } else {
      return '';
    }
  };

module.exports = {};

Object.keys(regex).forEach(function(key) {
  module.exports[key] = extract.bind( undefined, regex[key] );
});
