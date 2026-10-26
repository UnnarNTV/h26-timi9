// Fylgið mér 1: Arrays
// Hver æfing er ein function sem takki á síðunni kallar á.
// Við skrifum kóðann saman þar sem stendur TODO.

const dyr = ["köttur", "hundur", "hestur", "fiskur"];

// Æfing 1: Birta fylki
function aefing1() {
  // TODO: Birtu öll dýrin í "svar1", aðskilin með kommu.
  //       Skrifaðu líka fylkið sjálft í console.
  //       Vísbending: dyr.join(", ")
}

// Æfing 2: index og length
function aefing2() {
  // TODO: Birtu í "svar2":
  //       dyr[0], dyr[2], dyr.length, síðasta dýrið og dyr[4]
}

// Æfing 3: push og pop
const tolur = [1, 2, 3];

// Tilbúin: skrifar fylkið á síðuna
function synaTolur() {
  document.getElementById("svar3").innerHTML =
    "[" + tolur.join(", ") + "]  (length: " + tolur.length + ")";
}

function baetaAftast() {
  // TODO: push-aðu næstu tölu (tolur.length + 1) og kallaðu á synaTolur()
}

function takaAftasta() {
  // TODO: pop-aðu aftasta stakið, skrifaðu í console hvað pop() skilaði
  //       og kallaðu á synaTolur()
}

// Æfing 4: unshift og shift (biðröð)
const rod = ["Anna", "Jón"];

// Tilbúin: skrifar röðina á síðuna
function synaRod(aukaTexti) {
  let texti = "Röðin: " + rod.join(", ");
  if (aukaTexti) {
    texti = aukaTexti + "<br>" + texti;
  }
  document.getElementById("svar4").innerHTML = texti;
}

function fremstIRodina() {
  // TODO: sæktu nafnið úr "nafn4", settu það FREMST með unshift
  //       og kallaðu á synaRod()
}

function naesti() {
  // TODO: taktu fremsta úr röðinni með shift og
  //       kallaðu á synaRod("Næst: " + nafnið)
  //       Bónus: hvað ef röðin er tóm?
}

// Æfing 5: includes
const innkaup = ["mjólk", "brauð", "egg"];

function aefing5() {
  // TODO: sæktu vöruna úr "vara5" og notaðu includes()
  //       Birtu "Já, egg er á listanum" eða "Nei, ostur er ekki á listanum"
}

// Æfing 6: indexOf
function aefing6() {
  // TODO: sæktu vöruna úr "vara6" og notaðu indexOf()
  //       Birtu "brauð er á index 1" eða "Fannst ekki (indexOf skilaði -1)"
}

// Æfing 7: Fylki af objects
const vorur = [
  { nafn: "Mjólk", verd: 229 },
  { nafn: "Ostur", verd: 1890 },
  { nafn: "Epli", verd: 399 },
];

function aefing7() {
  // TODO: notaðu for...of (frá síðasta tíma) til að búa til
  //       "<li>Mjólk kostar 229 kr.</li>" fyrir hverja vöru og settu í "svar7"
  //       Prófaðu líka: console.log(vorur[1].nafn)
}
