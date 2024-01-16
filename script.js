const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const formInput = document.getElementsByTagName("form")[0];
const removeButton = document.getElementsByClassName("bg-danger")[0];
const contenitoreRegistrati = document.getElementById("utentiRegistrati");

let arrayUtente = [];

class Form {
  constructor(_name, _surname) {
    this.name = _name;
    this.surname = _surname;
  }
}

const visualizzaUtenti = function () {
  console.log("UTENTE REGISTRATO");
  contenitoreRegistrati.innerHTML = "";
  arrayUtente.forEach((utente) => {
    const utenteDiv = document.createElement("div");
    utenteDiv.classList.add("border", "col-1", "border-warning", "mx-1");
    utenteDiv.textContent = `Nome: ${utente.name.toUpperCase()}  Cognome: ${utente.surname.toUpperCase()}`;
    contenitoreRegistrati.appendChild(utenteDiv);
  });
};

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const save = new Form(nameInput.value, surnameInput.value);
  console.log(save, "UTENTE SALVATO");
  arrayUtente.push(save);
  alert("UTENTE REGISTRATO");
  localStorage.setItem("arrayUtente", JSON.stringify(arrayUtente));
  visualizzaUtenti();
});

removeButton.addEventListener("click", () => {
  console.log("Pulsante Rimuovi cliccato");
  arrayUtente.pop();
  localStorage.setItem("arrayUtente", JSON.stringify(arrayUtente));
  visualizzaUtenti();
  alert("UTENTE INSERITO PRECEDENTEMENTE VIENE RIMOSSO");
});

//////////////////////////////////////////////////////////////////// ESERCIZIO 2 //////////////////////////////////////////////////////////////////////////
const contatoreDiv = document.getElementById("contatore");

let contatore = sessionStorage.getItem("contatore") || 0;

const aggiornaContatore = function () {
  contatore++;
  contatoreDiv.textContent = contatore;
  window.addEventListener("unload", () => {
    sessionStorage.setItem("contatore", contatore); // non aggiorno il contatore quando la pagina viene aggiornata
  });
};

const intervalloContatore = setInterval(aggiornaContatore, 1000); // imposto l'intervallo per richiamare ogni secondo la funzione
