/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.
var buttonElement = document.getElementsByTagName("button")[0];

// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().
function changeButtonName() {
    var randomNumber = Math.random() * 10000;
    buttonElement.innerHTML = Math.floor(randomNumber);
}

// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.
buttonElement.addEventListener("click", changeButtonName);


