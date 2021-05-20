/*************************
 * Correction - JS
 * Session 6 : DOM
 ************************/

/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var buttonElement = document.getElementById("myButton");

// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
buttonElement.innerHTML = "Boutton modifier en JS";

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
var paragraphs = document.getElementsByTagName("p");

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var blueParagraph = document.getElementsByClassName("blue")[0];

// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".
var paragraphToHide = document.getElementById("hideMe");

// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
paragraphToHide.style.display = "none";

