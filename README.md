German courts - deutsche Gerichte
=============

This module queries the Orts- und Gerichtsverzeichnis (database of German courts and authorities) for zip codes and cities.

----
## usage
    var courts = require('german-courts');

    courts.venue({plz:'20144'}, function(){
      console.log(JSON.stringify(arguments, null, 2));
    });

    courts.authorities({ort1:'Hamburg'}, function(){
      console.log(JSON.stringify(arguments, null, 2));
    });

which will output

    [{
      "typ": "Amtsgericht",
      "bezeichnung": "Amtsgericht Hamburg",
      "anschrift": {
        "Lieferanschrift": {
          "all": "Sievekingplatz 1, 20355 Hamburg",
          "PLZ": "20355",
          "Ort": "Hamburg",
          "Adresse": "Sievekingplatz 1"
        },
        "Postanschrift": {
          "all": "Postfach 30 01 21, 20348 Hamburg",
          "PLZ": "20348",
          "Ort": "Hamburg",
          "Adresse": "Postfach 30 01 21"
        }
      },
      "kontakt": {
        "Telefon": "040 428 28-0",
        "Fax": "040 42843-4318",
        "URL": "www.amtsgericht.hamburg.de",
        "EMail": "",
        "XJustizId": "K1101"
      }
    },
    ...]

    [{
      "bezeichnung": "Hamburgisches Verfassungsgericht",
      "anschrift": {
        "Lieferanschrift": {
          "all": "Sievekingplatz 2, 20355 Hamburg",
          "PLZ": "20355",
          "Ort": "Hamburg",
          "Adresse": "Sievekingplatz 2"
        },
        "Postanschrift": {
          "all": "20348 Hamburg",
          "PLZ": "20348",
          "Ort": "Hamburg",
          "Adresse": ""
        }
      },
      "kontakt": {
        "Telefon": "040 42828-0",
        "Fax": "040 42843-4097",
        "URL": "www.verfassungsgericht.hamburg.de",
        "EMail": "poststelle@verfassungsgericht.hamburg.de",
        "XJustizId": "K6053"
      }
    },
    ...]


----
## License
MIT
