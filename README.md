German courts - deutsche Gerichte
=============

This module queries the Orts- und Gerichtsverzeichnis (database of German courts and authorities) for zip codes and cities.

----
## usage
````typescript
import { competentCourt } from 'german-courts';

competentCourt('hamburg', '20144').then(r => console.log(JSON.stringify(r, null, 2)));
````
or in js ;)
````javascript
const { competentCourt } = require('german-courts');

competentCourt('hamburg', '20144').then(r => console.log(JSON.stringify(r, null, 2)));
````

which will output
````json
[
  {
    "typ": "Amtsgericht",
    "bezeichnung": "Amtsgericht Hamburg",
    "gerichtstyp": "Amtsgericht",
    "fachgericht": false,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 428 28-0",
      "Fax": "040 42843-4318",
      "URL": "",
      "EMail": "",
      "XJustizId": "K1101Elektronischer"
    }
  },
  {
    "typ": "Landgericht",
    "bezeichnung": "Landgericht Hamburg Kammer für Handelssachen ist eingerichtet.",
    "gerichtstyp": "Landgericht",
    "fachgericht": false,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "20348",
        "Ort": "Hamburg",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 428 28-0",
      "Fax": "040 428 43-4318",
      "URL": "",
      "EMail": "",
      "XJustizId": "K1100Elektronischer"
    }
  },
  {
    "typ": "Staatsanwaltschaft",
    "bezeichnung": "Staatsanwaltschaft Hamburg",
    "gerichtstyp": "Staatsanwaltschaft",
    "fachgericht": false,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42828-0",
      "Fax": "040 42798-1002",
      "URL": "",
      "EMail": "",
      "XJustizId": "K1100SDer"
    }
  },
  {
    "typ": "Oberlandesgericht",
    "bezeichnung": "Hanseatisches Oberlandesgericht",
    "gerichtstyp": "Oberlandesgericht",
    "fachgericht": false,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "20348",
        "Ort": "Hamburg",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 428 28-0",
      "Fax": "040 42843-4097",
      "URL": "",
      "EMail": "",
      "XJustizId": "K1000Elektronischer"
    }
  },
  {
    "typ": "Generalstaatsanwaltschaft",
    "bezeichnung": "Generalstaatsanwaltschaft Hamburg",
    "gerichtstyp": "Generalstaatsanwaltschaft",
    "fachgericht": false,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42843-1710",
      "Fax": "040 42798-1900",
      "URL": "",
      "EMail": "",
      "XJustizId": "K1000SDer"
    }
  },
  {
    "typ": "Arbeitsgericht",
    "bezeichnung": "Arbeitsgericht Hamburg  Rechtszug",
    "gerichtstyp": "Arbeitsgericht",
    "fachgericht": true,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42863-5665",
      "Fax": "040 4279-62804",
      "URL": "",
      "EMail": "",
      "XJustizId": "K6055Der"
    }
  },
  {
    "typ": "Finanzgericht",
    "bezeichnung": "Finanzgericht Hamburg  Rechtszug",
    "gerichtstyp": "Finanzgericht",
    "fachgericht": true,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42828-0",
      "Fax": "040 427982-777",
      "URL": "",
      "EMail": "",
      "XJustizId": "K6079Der"
    }
  },
  {
    "typ": "Sozialgericht",
    "bezeichnung": "Sozialgericht Hamburg  Rechtszug",
    "gerichtstyp": "Sozialgericht",
    "fachgericht": true,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42828-0",
      "Fax": "040 427-3-10232",
      "URL": "",
      "EMail": "",
      "XJustizId": "K6083Der"
    }
  },
  {
    "typ": "Verwaltungsgericht",
    "bezeichnung": "Verwaltungsgericht Hamburg  Rechtszug",
    "gerichtstyp": "Verwaltungsgericht",
    "fachgericht": true,
    "zusatz": "",
    "anschrift": {
      "Lieferanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Adresse": ""
      },
      "Postanschrift": {
        "all": "",
        "PLZ": "",
        "Ort": "",
        "Postfach": ""
      }
    },
    "kontakt": {
      "Telefon": "040 42828-0",
      "Fax": "040 42843-7219",
      "URL": "",
      "EMail": "",
      "XJustizId": "K6052Der"
    }
  }
]
````



----
## License
MIT
