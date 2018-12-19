German courts - deutsche Gerichte
=============

This module queries the Orts- und Gerichtsverzeichnis (database of German courts and authorities) for zip codes and cities.

----
## usage
````typescript
import { competentCourt } from 'german-courts';

competentCourt('hamburg', '20095').then(r => console.log(JSON.stringify(r, null, 2)));
````

which will output
````json
[
  {
    "selektion": "Altländer Straße alle Hausnummern von 001 bis 999",
    "institutionen": [
      {
        "type": "Amtsgericht",
        "name": "Amtsgericht Hamburg-St.Georg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Postfach 10 03 21",
            "20002 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/ag-stgeorg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-7219",
          "XJustizId": "K1108"
        }
      },
      {
        "type": "Landgericht",
        "name": "Landgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 1",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gerichte/landgericht-hamburg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 428 43-4318, -4319",
          "EMail": "poststelle@lg.justiz.hamburg.de",
          "XJustizId": "K1100"
        }
      },
      {
        "type": "Staatsanwaltschaft",
        "name": "Staatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.staatsanwaltschaft.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42798-1002",
          "EMail": "Poststelle-Staatsanwaltschaft@sta.justiz.hamburg.de",
          "XJustizId": "K1100S"
        }
      },
      {
        "type": "Oberlandesgericht",
        "name": "Hanseatisches Oberlandesgericht ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 2",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.oberlandesgericht.hamburg.de",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-4097",
          "EMail": "poststelle@olg.justiz.hamburg.de",
          "XJustizId": "K1000"
        }
      },
      {
        "type": "Generalstaatsanwaltschaft",
        "name": "Generalstaatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gensta-startseite",
          "Telefon": "040 42843-1710, -1711",
          "Fax": "040 42798-1900",
          "EMail": "generalstaatsanwaltschaft-hamburg@sta.justiz.hamburg.de",
          "XJustizId": "K1000S"
        }
      },
      {
        "type": "Arbeitsgericht",
        "name": "Arbeitsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Osterbekstraße 96",
            "22083 Hamburg"
          ],
          "postanschrift": [
            "Postfach 76 07 20",
            "22057 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.arbeitsgericht.hamburg.de",
          "Telefon": "040 42863-5665",
          "Fax": "040 4279-62804",
          "EMail": "poststelle@arbg.justiz.hamburg.de",
          "XJustizId": "K6055"
        }
      },
      {
        "type": "Finanzgericht",
        "name": "Finanzgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.finanzgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427982-777",
          "EMail": "poststelle@fg.justiz.hamburg.de",
          "XJustizId": "K6079"
        }
      },
      {
        "type": "Sozialgericht",
        "name": "Sozialgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ],
          "postanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.sozialgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427-3-10232",
          "EMail": "poststelle@lsg.justiz.hamburg.de",
          "XJustizId": "K6083"
        }
      },
      {
        "type": "Verwaltungsgericht",
        "name": "Verwaltungsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.verwaltungsgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42843-7219",
          "EMail": "poststelle@vg.justiz.hamburg.de",
          "XJustizId": "K6052"
        }
      }
    ]
  },
  {
    "selektion": "Klosterwall ungerade Hausnummern von 001 bis 023",
    "institutionen": [
      {
        "type": "Amtsgericht",
        "name": "Amtsgericht Hamburg-St.Georg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Postfach 10 03 21",
            "20002 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/ag-stgeorg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-7219",
          "XJustizId": "K1108"
        }
      },
      {
        "type": "Landgericht",
        "name": "Landgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 1",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gerichte/landgericht-hamburg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 428 43-4318, -4319",
          "EMail": "poststelle@lg.justiz.hamburg.de",
          "XJustizId": "K1100"
        }
      },
      {
        "type": "Staatsanwaltschaft",
        "name": "Staatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.staatsanwaltschaft.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42798-1002",
          "EMail": "Poststelle-Staatsanwaltschaft@sta.justiz.hamburg.de",
          "XJustizId": "K1100S"
        }
      },
      {
        "type": "Oberlandesgericht",
        "name": "Hanseatisches Oberlandesgericht ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 2",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.oberlandesgericht.hamburg.de",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-4097",
          "EMail": "poststelle@olg.justiz.hamburg.de",
          "XJustizId": "K1000"
        }
      },
      {
        "type": "Generalstaatsanwaltschaft",
        "name": "Generalstaatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gensta-startseite",
          "Telefon": "040 42843-1710, -1711",
          "Fax": "040 42798-1900",
          "EMail": "generalstaatsanwaltschaft-hamburg@sta.justiz.hamburg.de",
          "XJustizId": "K1000S"
        }
      },
      {
        "type": "Arbeitsgericht",
        "name": "Arbeitsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Osterbekstraße 96",
            "22083 Hamburg"
          ],
          "postanschrift": [
            "Postfach 76 07 20",
            "22057 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.arbeitsgericht.hamburg.de",
          "Telefon": "040 42863-5665",
          "Fax": "040 4279-62804",
          "EMail": "poststelle@arbg.justiz.hamburg.de",
          "XJustizId": "K6055"
        }
      },
      {
        "type": "Finanzgericht",
        "name": "Finanzgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.finanzgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427982-777",
          "EMail": "poststelle@fg.justiz.hamburg.de",
          "XJustizId": "K6079"
        }
      },
      {
        "type": "Sozialgericht",
        "name": "Sozialgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ],
          "postanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.sozialgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427-3-10232",
          "EMail": "poststelle@lsg.justiz.hamburg.de",
          "XJustizId": "K6083"
        }
      },
      {
        "type": "Verwaltungsgericht",
        "name": "Verwaltungsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.verwaltungsgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42843-7219",
          "EMail": "poststelle@vg.justiz.hamburg.de",
          "XJustizId": "K6052"
        }
      }
    ]
  },
  {
    "selektion": "Steintorwall alle Hausnummern von 018 bis 024",
    "institutionen": [
      {
        "type": "Amtsgericht",
        "name": "Amtsgericht Hamburg-St.Georg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Postfach 10 03 21",
            "20002 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/ag-stgeorg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-7219",
          "XJustizId": "K1108"
        }
      },
      {
        "type": "Landgericht",
        "name": "Landgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 1",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gerichte/landgericht-hamburg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 428 43-4318, -4319",
          "EMail": "poststelle@lg.justiz.hamburg.de",
          "XJustizId": "K1100"
        }
      },
      {
        "type": "Staatsanwaltschaft",
        "name": "Staatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.staatsanwaltschaft.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42798-1002",
          "EMail": "Poststelle-Staatsanwaltschaft@sta.justiz.hamburg.de",
          "XJustizId": "K1100S"
        }
      },
      {
        "type": "Oberlandesgericht",
        "name": "Hanseatisches Oberlandesgericht ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 2",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.oberlandesgericht.hamburg.de",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-4097",
          "EMail": "poststelle@olg.justiz.hamburg.de",
          "XJustizId": "K1000"
        }
      },
      {
        "type": "Generalstaatsanwaltschaft",
        "name": "Generalstaatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gensta-startseite",
          "Telefon": "040 42843-1710, -1711",
          "Fax": "040 42798-1900",
          "EMail": "generalstaatsanwaltschaft-hamburg@sta.justiz.hamburg.de",
          "XJustizId": "K1000S"
        }
      },
      {
        "type": "Arbeitsgericht",
        "name": "Arbeitsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Osterbekstraße 96",
            "22083 Hamburg"
          ],
          "postanschrift": [
            "Postfach 76 07 20",
            "22057 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.arbeitsgericht.hamburg.de",
          "Telefon": "040 42863-5665",
          "Fax": "040 4279-62804",
          "EMail": "poststelle@arbg.justiz.hamburg.de",
          "XJustizId": "K6055"
        }
      },
      {
        "type": "Finanzgericht",
        "name": "Finanzgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.finanzgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427982-777",
          "EMail": "poststelle@fg.justiz.hamburg.de",
          "XJustizId": "K6079"
        }
      },
      {
        "type": "Sozialgericht",
        "name": "Sozialgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ],
          "postanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.sozialgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427-3-10232",
          "EMail": "poststelle@lsg.justiz.hamburg.de",
          "XJustizId": "K6083"
        }
      },
      {
        "type": "Verwaltungsgericht",
        "name": "Verwaltungsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.verwaltungsgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42843-7219",
          "EMail": "poststelle@vg.justiz.hamburg.de",
          "XJustizId": "K6052"
        }
      }
    ]
  },
  {
    "selektion": "Andere",
    "institutionen": [
      {
        "type": "Amtsgericht",
        "name": "Amtsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 1",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 01 21",
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.amtsgericht.hamburg.de",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-4318, -4319",
          "XJustizId": "K1101"
        }
      },
      {
        "type": "Landgericht",
        "name": "Landgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 1",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gerichte/landgericht-hamburg/",
          "Telefon": "040 428 28-0",
          "Fax": "040 428 43-4318, -4319",
          "EMail": "poststelle@lg.justiz.hamburg.de",
          "XJustizId": "K1100"
        }
      },
      {
        "type": "Staatsanwaltschaft",
        "name": "Staatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.staatsanwaltschaft.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42798-1002",
          "EMail": "Poststelle-Staatsanwaltschaft@sta.justiz.hamburg.de",
          "XJustizId": "K1100S"
        }
      },
      {
        "type": "Oberlandesgericht",
        "name": "Hanseatisches Oberlandesgericht ",
        "anschriften": {
          "lieferanschrift": [
            "Sievekingplatz 2",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "20348 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.oberlandesgericht.hamburg.de",
          "Telefon": "040 428 28-0",
          "Fax": "040 42843-4097",
          "EMail": "poststelle@olg.justiz.hamburg.de",
          "XJustizId": "K1000"
        }
      },
      {
        "type": "Generalstaatsanwaltschaft",
        "name": "Generalstaatsanwaltschaft Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Gorch-Fock-Wall 15",
            "20355 Hamburg"
          ],
          "postanschrift": [
            "Postfach 30 52 61",
            "20316 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.justiz.hamburg.de/gensta-startseite",
          "Telefon": "040 42843-1710, -1711",
          "Fax": "040 42798-1900",
          "EMail": "generalstaatsanwaltschaft-hamburg@sta.justiz.hamburg.de",
          "XJustizId": "K1000S"
        }
      },
      {
        "type": "Arbeitsgericht",
        "name": "Arbeitsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Osterbekstraße 96",
            "22083 Hamburg"
          ],
          "postanschrift": [
            "Postfach 76 07 20",
            "22057 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.arbeitsgericht.hamburg.de",
          "Telefon": "040 42863-5665",
          "Fax": "040 4279-62804",
          "EMail": "poststelle@arbg.justiz.hamburg.de",
          "XJustizId": "K6055"
        }
      },
      {
        "type": "Finanzgericht",
        "name": "Finanzgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.finanzgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427982-777",
          "EMail": "poststelle@fg.justiz.hamburg.de",
          "XJustizId": "K6079"
        }
      },
      {
        "type": "Sozialgericht",
        "name": "Sozialgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ],
          "postanschrift": [
            "Dammtorstraße 7",
            "20354 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.sozialgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 427-3-10232",
          "EMail": "poststelle@lsg.justiz.hamburg.de",
          "XJustizId": "K6083"
        }
      },
      {
        "type": "Verwaltungsgericht",
        "name": "Verwaltungsgericht Hamburg ",
        "anschriften": {
          "lieferanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ],
          "postanschrift": [
            "Lübeckertordamm 4",
            "20099 Hamburg"
          ]
        },
        "kontakt": {
          "URL": "http://www.verwaltungsgericht.hamburg.de",
          "Telefon": "040 42828-0",
          "Fax": "040 42843-7219",
          "EMail": "poststelle@vg.justiz.hamburg.de",
          "XJustizId": "K6052"
        }
      }
    ]
  }
]

````



----
## License
MIT
