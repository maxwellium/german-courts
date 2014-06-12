var courts = require('../');

courts.venue({plz:'20144'}, function(){
  console.log(arguments);
});

courts.authorities({ort1:'Hamburg'}, function(){
  console.log(arguments);
});