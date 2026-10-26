// Fylgið mér 2: forEach & map
// Hver æfing er ein function sem takki á síðunni kallar á.
// Við skrifum kóðann saman þar sem stendur TODO.

const dyr = ["köttur", "hundur", "hestur"];
const tolur = [1, 2, 3, 4];
const verd = [1000, 2000, 3500];
const vorur = [
  { nafn: "Mjólk", verd: 229 },
  { nafn: "Brauð", verd: 649 },
  { nafn: "Ostur", verd: 1890 },
];

// Æfing 1: forEach
function aefing1() {
  // TODO: notaðu dyr.forEach(...) til að skrifa hvert dýr í console.
  //       Skrifaðu svo "Skrifaði 3 dýr í console" í "svar1".
  dyr.forEach((eitt) => {
    console.log(eitt);
  });

  document.getElementById("svar1").innerHTML =
    "Skrifaði " + dyr.length + " dýr í console";
}

// Æfing 2: forEach með index
function aefing2() {
  // TODO: notaðu forEach með tveimur parameters: (eitt, i) => { ... }
  //       Búðu til texta "1. köttur<br>2. hundur<br>..." og settu í "svar2"
  //       Munið: i byrjar í 0!
  let texti = "";

  dyr.forEach((eitt, i) => {
    texti += i + 1 + ". " + eitt + "<br>";
  });

  document.getElementById("svar2").innerHTML = texti;
}

// Æfing 3: map
function aefing3() {
  // TODO: búðu til nýtt fylki tvofalt með tolur.map(...)
  //       Birtu bæði fylkin: "tolur: 1, 2, 3, 4<br>tvofalt: 2, 4, 6, 8"
  const tvofalt = tolur.map((x) => x * 2);

  document.getElementById("svar3").innerHTML =
    "tolur: " + tolur.join(", ") + "<br>tvofalt: " + tvofalt.join(", ");
}

// Æfing 4: map á texta
function aefing4() {
  // TODO: búðu til nýtt fylki með öllum dýrunum í hástöfum og birtu það
  const hastafir = dyr.map((d) => d.toUpperCase());

  document.getElementById("svar4").innerHTML = hastafir.join(", ");
}

// Æfing 5: { } án return
// Þessi er tilbúin og VITLAUS. Smellið á takkann og skoðið svarið.
function aefing5Villa() {
  const medVsk = verd.map((v) => {
    v * 1.24;
  });

  console.log(medVsk);
  document.getElementById("svar5").innerHTML = "Með villu: " + medVsk.join(", ") +
    " (tómt? Skoðaðu console)";
}

function aefing5Lagad() {
  // TODO: skrifaðu sama kóða og fyrir ofan, en lagaðu villuna.
  //       Tvær leiðir: bæta við return, eða sleppa { }
  const medVsk = verd.map((v) => v * 1.24);
  // eða: verd.map((v) => { return v * 1.24; });

  console.log(medVsk);
  document.getElementById("svar5").innerHTML = "Lagað: " + medVsk.join(", ");
}

// Æfing 6: map + join
function aefing6() {
  // TODO: breyttu hverju dýri í "<li>dýr</li>" með map,
  //       límdu saman með join("") og settu í "svar6"
  const html = dyr.map((d) => "<li>" + d + "</li>").join("");

  document.getElementById("svar6").innerHTML = html;
}

// Æfing 7: map á objects
function aefing7() {
  // TODO: búðu til fylki með BARA nöfnunum: ["Mjólk", "Brauð", "Ostur"]
  //       og birtu það í "svar7"
  //       Bónus: birtu líka "Mjólk – 229 kr." fyrir hverja vöru
  const nofn = vorur.map((vara) => vara.nafn);
  const linur = vorur.map((vara) => vara.nafn + " – " + vara.verd + " kr.");

  document.getElementById("svar7").innerHTML =
    nofn.join(", ") + "<br><br>" + linur.join("<br>");
}
