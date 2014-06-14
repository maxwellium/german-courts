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

or

    courts.authorities({ort:'Hamburg'}, function(errors, institutes) {
      console.log(JSON.stringify(institutes, null, 2));
    });

giving

    [..., {
      "bezeichnung": "Generalstaatsanwaltschaft Hamburg",
      "gerichtstyp": "Generalstaatsanwaltschaft",
      "anschrift": {
        "Lieferanschrift": {
          "all": "Gorch-Fock-Wall 15, 20355 Hamburg",
          "PLZ": "20355",
          "Ort": "Hamburg",
          "Adresse": "Gorch-Fock-Wall 15"
        },
        "Postanschrift": {
          "all": "Postfach 30 52 61, 20316 Hamburg",
          "PLZ": "20316",
          "Ort": "Hamburg",
          "Postfach": "30 52 61"
        }
      },
      "kontakt": {
        "Telefon": "040 42843-1710",
        "Fax": "040 42843-1863",
        "URL": "www.generalstaatsanwaltschaft.hamburg.de",
        "EMail": "generalstaatsanwaltschaft-hamburg@sta.justiz.hamburg.de",
        "XJustizId": "K1000S"
      }
    },
    {
      "bezeichnung": "Staatsanwaltschaft Hamburg",
      "gerichtstyp": "Staatsanwaltschaft",
      "anschrift": {
        "Lieferanschrift": {
          "all": "Gorch-Fock-Wall 15, 20355 Hamburg",
          "PLZ": "20355",
          "Ort": "Hamburg",
          "Adresse": "Gorch-Fock-Wall 15"
        },
        "Postanschrift": {
          "all": "Postfach 30 52 61, 20316 Hamburg",
          "PLZ": "20316",
          "Ort": "Hamburg",
          "Postfach": "30 52 61"
        }
      },
      "kontakt": {
        "Telefon": "040 428 28-0",
        "Fax": "040 428 43-4387",
        "URL": "www.staatsanwaltschaft.hamburg.de",
        "EMail": "poststelle-staatsanwaltschaft@sta.justiz.hamburg.de",
        "XJustizId": "K1100S"
      }
    }, ...]


----
## License
MIT
