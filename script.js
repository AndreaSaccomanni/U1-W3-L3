const newTask = () => {
  console.log("new task");
  //seleziono ciò che scrivo all'interno dell'input
  const input = document.getElementById("task").value;

  // Se l'input non è vuoto, allora aggiugno ciò che scrivo alla lista
  if (input !== "") {
    // Creo un nuovo elemento <li>
    const li = document.createElement("li");
    //console.dir(li);
    //il contenuto di <li> sarà quello che scrivo nell'input
    li.textContent = input;
    //assegno una funzione al click
    li.onclick = taskCompleted;

    li.id = countId;
    //creo un nuovo bottone
    const removeButton = document.createElement("button");
    removeButton.id = countId;
    removeButton.onclik = removeButton.innerHTML = "remove Task";

    // Aggiungo il nuovo task alla lista
    document.getElementById("taskList").appendChild(li);
    // Aggiungo il nuovo button alla lista
    document.getElementById("taskList").appendChild(removeButton);
    const br = document.createElement("br");
    document.getElementById("taskList").appendChild(br);
    // Ripulisco il campo di input una volta che ho inviato tramite il bottone
    document.getElementById("task").value = "";
  } else {
    //se il campo inserito non è valido appare un alert che lo segnala
    alert("Inserisci un task valido!");
  }
};
btn.onclick = newTask;

const taskCompleted = (event) => {
  event.target.classList.add("done");
};
const removeTask = (event) => {};
let countId = 0;
