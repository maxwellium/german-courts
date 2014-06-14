var courts = require('../');

courts.venue({plz:'20144'}, function(errors, courts) {
  console.log(JSON.stringify(courts, null, 2));
});

courts.authorities({ort:'Hamburg'}, function(errors, institutes) {
  console.log(JSON.stringify(institutes, null, 2));
});