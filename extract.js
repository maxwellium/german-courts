var
  regex = {
    plz     : /(\d{4,5}) .+$/,
    ort     : /\d{4,5} (.+)$/,
    adresse : /^(.+)(?=, \d{4,5}.+)/
  },

  extract = function(regex, string){
    regex.lastIndex = 0;
    var match = regex.exec(string);

    if( match && (match.length > 1) ){
      return match[1];
    } else {
      return '';
    }
  };

module.exports = {
  adresse : extract.bind( undefined, regex.adresse ),
  ort     : extract.bind( undefined, regex.ort ),
  plz     : extract.bind( undefined, regex.plz )
};
