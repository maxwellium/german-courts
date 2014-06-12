var
  Request         = require('request'),
  Parse           = require('./parse'),

  url             = 'http://www.justizadressen.nrw.de/og.php',
  defaultParams   = {
    'gerausw' : 'ALL'
  },

  extendToNew = function(){
    var result = {};
    var args = Array.prototype.slice.call(arguments, 0);
    args.forEach(function(argument){
      Object.keys(argument).forEach(function(key){
        result[key] = argument[key];
      });
    });
    return result;
  },

  request = function (params, callback){
    var results;

    params = extendToNew(defaultParams, params);

    return Request({uri: url, qs: params}, function (error, response, body){
      if( !error && response.statusCode == 200 ){

        results = Parse(body);

        if( false === results ){
          callback('format error');
        }else{
          callback( null, results );
        }
      }else{
        callback('http error');
      }
    });
  };

/**
 * zuständiges Gericht
 * @param  {object}   params ort, plz
 * @param  {Function} callback [description]
 * @return {array}
 */
module.exports.venue = function(params, callback){
  params.suchen='+Absenden+';
  return request(params, callback);
};

/**
 * zuständige Behörden und Institutionen
 * @param  {object}   params ort1, plz1
 * @param  {Function} callback [description]
 * @return {array}
 */
module.exports.authorities = function (params, callback){
  params.suchen1='+Absenden+';
  return request(params, callback);
};
