const messages = {
  en: {
    text:
      "At {1,time,::jmm} o'clock on {1,date,::dMMMM}, {3, select, male {he} female {she}} decided to buy {0,number,integer} {0, plural, =0 {car} one {car} other {cars}}. Then {2}",
  },
  de: {
    text:
      "Um {1,time,::jmm} Uhr, am {1,date,::dMMMM}, entschied {3, select, male {er} female {sie}} sich {0,number,integer} {0, plural, =0 {Auto} one {Auto} other {Autos}} zu kaufen. Danach {2}",
  },
  fr: {
    text:
      "A {1,time,::jmm} heures le {1,date,::dMMMM}, {3, select, male {il} female {elle}} a décidé d'acheter {0,number,integer} {0, plural, =0 {voiture} one {voiture} other {voitures}}. Après {2}",
  },
};

export default messages;
