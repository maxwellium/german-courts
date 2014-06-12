var courts = require('../');

courts.zuständigesGericht({plz:'20144'}, function(){
  console.log(arguments);
});