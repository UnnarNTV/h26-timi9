// Fylgið mér 3: filter, find & reduce
// Hver æfing er ein function sem takki á síðunni kallar á.
// Við skrifum kóðann saman þar sem stendur TODO.

const verd = [1290, 450, 3990, 790, 2490];
const nofn = ["Sigga", "Jón", "Sara", "Anna", "Stefán", "Óli"];
const vorur = [
  { nafn: "Mjólk", verd: 229 },
  { nafn: "Brauð", verd: 649 },
  { nafn: "Ostur", verd: 1890 },
  { nafn: "Epli", verd: 399 },
  { nafn: "Kaffi", verd: 1490 },
  { nafn: "Súkkulaði", verd: 349 },
];

// Æfing 1: filter
function aefing1() {
  // TODO: búðu til fylkið dyrar með verd.filter(...) (verð yfir 1000)
  //       Birtu: "Öll: 1290, 450, ...<br>Yfir 1000: 1290, 3990, 2490"
}

// Æfing 2: filter með texta
function aefing2() {
  // TODO: sæktu stafinn úr "stafur2" og haltu bara nöfnum sem byrja á honum
  //       Bónus: ef ekkert nafn passar, birtu "Ekkert nafn byrjar á X"
}

// Æfing 3: find
function aefing3() {
  // TODO: sæktu leitarorðið úr "leit3" og notaðu vorur.find(...)
  //       til að finna vöruna með því nafni.
  //       Fannst: "Ostur kostar 1890 kr."   Fannst ekki: "Engin vara heitir X"
  //       Munið: find skilar undefined ef ekkert passar
}

// Æfing 4: reduce summa
function aefing4() {
  // TODO: leggðu saman verd með reduce. Upphafsgildi 0.
  //       Inni í function: console.log(samtals, v) til að sjá hverja umferð
  //       (þá þarf { } og return!)
}

// Æfing 5: reduce á texta
function aefing5() {
  // TODO: teldu alla stafi í öllum nöfnunum: nafn.length gefur fjölda stafa
  //       Birtu: "Samtals 25 stafir í 6 nöfnum"
}

// Æfing 6: keðja
function aefing6() {
  // TODO: gerðu þetta í þremur skrefum og birtu hvert skref:
  //       1. odyrar = vorur.filter(...)  (verd < 1000)
  //       2. bara verðin = odyrar.map(...)
  //       3. samtals = verðin.reduce(...)
  //       Skrifaðu þetta svo sem EINA keðju: vorur.filter(...).map(...).reduce(...)
}

// Æfing 7: Spáðu fyrir (tilbúin, kennarinn keyrir)
function spa(stafur) {
  let svar;

  if (stafur === "a") svar = [1, 2, 3].map((x) => x + 1);
  if (stafur === "b") svar = [1, 2, 3].filter((x) => x > 5);
  if (stafur === "c") svar = [1, 2, 3].find((x) => x > 5);
  if (stafur === "d") svar = [1, 2, 3].reduce((s, x) => s + x, 10);
  if (stafur === "e") svar = [1, 2, 3].forEach((x) => x * 2);

  // JSON.stringify sýnir fylki með [ ] svo [] sést líka
  const texti = svar === undefined ? "undefined" : JSON.stringify(svar);
  document.getElementById("svar7").innerHTML = stafur + ")  " + texti;
  console.log(stafur + ")", svar);
}
