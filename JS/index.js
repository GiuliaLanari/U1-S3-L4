//1) 👍creare 76 celle con numeri da 1 a 76 TABELLONE

//2) 👍creare un <button> che con il suo click selezioni un numero random (da 1 a 76)

//3) 👍visualizza in modo diverso la casella trovata dal button (cambio colore dello sfondo)

//4) 👍mantieni il colore della cella dei elementi già estratti

const caselleTabellone = () => {
  const tabellone = document.getElementById("tabellone");

  for (let i = 1; i < 77; i++) {
    const cella = document.createElement("div");
    cella.className = "cella";
    const cellaH3 = document.createElement("h3");

    cellaH3.innerText = i;

    cella.appendChild(cellaH3);
    tabellone.appendChild(cella);
  }
  // CREAZIONE DEL BOTTONE

  const bottoneEstrazione = document.querySelector(".bottoneEstrazione");

  bottoneEstrazione.onclick = () => {
    const numeroRandom = Math.ceil(Math.random() * 76);
    const arrayCelle = document.querySelectorAll(".cella");

    // console.log(numeroRandom, arrayCelle[numeroRandom - 1]);
    const estratto = arrayCelle[numeroRandom - 1];
    estratto.style = "background-color: green";

    // COME VISUALIZZARE IL VALORE ESTRATTO
    const numberContenitore = document.querySelector(".push-number h2");
    numberContenitore.innerText = numeroRandom;
  };
};

window.onload = () => {
  caselleTabellone();
};
