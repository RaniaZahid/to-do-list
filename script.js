let input = document.getElementById("tache");
let ajouterBtn = document.getElementById("ajouter");
let supprimerBtn = document.getElementById("supprimer");
let liste = document.getElementById("liste");
let message = document.getElementById("message");

// Cacher le bouton Supprimer au début
supprimerBtn.style.display = "none";

// Ajouter une tâche
function ajouterTache() {
  let texte = input.value.trim();

  if (texte === "") {
    message.textContent = "Le champ ne doit pas être vide.";
    message.style.color = "red"; // 🔴 rouge
    return;
  }

  // Créer les éléments de la tâche
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  let span = document.createElement("span");
  span.textContent = texte;

  // Cocher en cliquant sur toute la ligne
  li.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
  });

  // Éviter double déclenchement
  checkbox.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  liste.appendChild(li);

  message.textContent = "Tâche ajoutée !";
  message.style.color = "green"; // 🟢 vert
  input.value = "";

  supprimerBtn.style.display = "inline-block";
}

// Supprimer les tâches cochées
function supprimerTaches() {
  let items = liste.querySelectorAll("li");
  let count = 0;

  items.forEach((item) => {
    let checkbox = item.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      item.remove();
      count++;
    }
  });

  if (count > 0) {
    message.textContent = "Tâche(s) supprimée(s) !";
    message.style.color = "orange"; // 🟠 orange
  }

  if (liste.children.length === 0) {
    supprimerBtn.style.display = "none";
  }
}

// Bouton Ajouter
ajouterBtn.addEventListener("click", ajouterTache);

// Touche Entrée
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    ajouterTache();
  }
});

// Bouton Supprimer
supprimerBtn.addEventListener("click", supprimerTaches);
