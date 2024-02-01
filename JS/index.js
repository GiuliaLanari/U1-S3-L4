//1)👍 creare 76 celle con numeri da 1 a 76 TABELLONE

//2) creare un <button> che con il suo click selezioni un numero random (da 1 a 76)

//3) visualizza in modo diverso la casella trovata dal button (cambio colore dello sfondo)

//4) mantieni il colore della cella dei elementi già estratti

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
  const bottoneEstrazione = document.getElementById("bottoneEstrazione");

  bottoneEstrazione.onclick = () => {
    if (cellaH3.length === 1) {
      Math.ceil(Math.random() * 76);
    }
  };
};

window.onload = () => {
  caselleTabellone();
};
