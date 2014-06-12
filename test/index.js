var courts = require('../');

courts.venue({plz:'20144'}, function(){
  console.log(JSON.stringify(arguments, null, 2));
});

courts.authorities({ort1:'Hamburg'}, function(){
  console.log(JSON.stringify(arguments, null, 2));
});