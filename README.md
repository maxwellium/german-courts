German courts - deutsche Gerichte
=============

This module queries the Orts- und Gerichtsverzeichnis (database of German courts and authorities) for zip codes and cities.

----
## usage
    var courts = require('german-courts');

    courts.venue({plz:'20144'}, function(errors, courts) {
      console.log(JSON.stringify(courts, null, 2));
    });

which will output

    [{
      "typ": "Amtsgericht",
      "bezeichnung": "Amtsgericht Hamburg",
      "gerichtstyp": "Amtsgericht",
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
          "Postfach": "30 01 21"
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
    {
      "typ": "Landgericht",
      "bezeichnung": "Landgericht Hamburg",
      "gerichtstyp": "Landgericht",
      "zusatz": "Kammer für Handelssachen ist eingerichtet.",
      "anschrift": {
        "Lieferanschrift": {
          "all": "Sievekingplatz 1, 20355 Hamburg",
          "PLZ": "20355",
          "Ort": "Hamburg",
          "Adresse": "Sievekingplatz 1"
        },
        "Postanschrift": {
          "all": "20348 Hamburg",
          "PLZ": "20348",
          "Ort": "Hamburg",
          "Postfach": ""
        }
      },
      "kontakt": {
        "Telefon": "040 428 28-0",
        "Fax": "040 428 43-4318",
        "URL": "www.landgericht.hamburg.de",
        "EMail": "poststelle@lg.justiz.hamburg.de",
        "XJustizId": "K1100"
      }
    }, ...]




----
## License
MIT
