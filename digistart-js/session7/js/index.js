// Ouvrez index.html dans un navigateur.
// Au milieu, le bouton "GO" contient un évènement "onclick",
// qui exécute la fonction go() ci-dessous.

// Merci d'écrire vos lignes de code dans l'espace en dessous de chaque consigne.
var landingPage = document.getElementById("landing-page");
var gamePage = document.getElementById("game-page");
var restartButton = document.getElementById("restart");
var arrivedPlayers = [];

const COYOTE_RED = "red";
const COYOTE_YELLOW = "yellow";
const COYOTE_SPEED = 10;

function go() {
  // ---TODO--- 1
  // La page que nous voulons cacher a l'id "landing-page".
  // Ecrivez ci-dessous le code pour ajouter le style "display: none" à cet élément.
  landingPage.style.display ="none";
  
  // ---TODO--- 2
  // Celle que nous voulons afficher a l'id "game-page"
  // Ecrivez ci-dessous le code pour ajouter le style "display: flex" à cet élément.
  gamePage.style.display = "flex";
  
  // ---TODO--- 3
  // Maintenant que la page de jeu s'est affichée,
  // il faut ajouter la classe "animation"
  // à l'élément ayant l'id "bipbip".
  // Cela permettra à bipbip de traverser l'écran avant que
  // les coyottes ne commencent à le poursuivre.
  var bipbip = document.getElementById("bipbip");
  bipbip.className = "animation";

  restartButton.style.display = "none";
}

// ---TODO--- 4
// Ajouter un "écouteur d'évènement" au document.
// L'évènement écouté est `keydown`, et la fonction exécutée est
// celle que nous nous allons créer juste après.
document.addEventListener("keydown", onKeyDown);

// Nous allons maintenant préparer la fonction `onKeyDown()`,
// qui sera exécutée par le TODO 4.
// Il s'agit de tout ce que nous voulons exécuter lorsqu'une
// touche du clavier a été appuyée.
function onKeyDown(event) {
  // ---TODO--- 5-A
  // Je commence par créer 2 variables `redCoyote` et
  // `yellowCoyote` qui vont récupérer les deux personnages.
  var redCoyote = document.getElementById(COYOTE_RED);
  var yellowCoyote = document.getElementById(COYOTE_YELLOW);

  // Je crée 2 variables `leftRed` et `leftYellow`, qui sont
  // les positions des deux personnages.
  // Pour connaître leur positiion, j'utilise leur propriété CSS `left`.
  var leftRed = parseInt(window.getComputedStyle(redCoyote).getPropertyValue("left"));
  var leftYellow = parseInt(window.getComputedStyle(yellowCoyote).getPropertyValue("left"));
  var coyoteWidth = parseInt(window.getComputedStyle(redCoyote).getPropertyValue("width")) / 2;

  // ---TODO--- 5-B
  // Traduire ce pseudo code :
  
  // Si le keyCode de mon event vaut 39,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.

  // Sinon, si le keyCode de mon event vaut 90,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.
  if (event.keyCode === 39)
    updatePlayerPosition(COYOTE_RED, leftRed += COYOTE_SPEED);
  else if (event.keyCode === 90)
    updatePlayerPosition(COYOTE_YELLOW, leftYellow += COYOTE_SPEED);
  
  // ---TODO--- 5-C
  // Traduire ici ce pseudo code :

  // Si la valeur `left` du redCoyote (nous avons créé plus
  // haut la variable `leftRed`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote rouge gagne !`
  var windowWidth = parseInt(window.innerWidth) - coyoteWidth;

  if (leftRed > windowWidth && !arrivedPlayers.includes(COYOTE_RED)) 
    checkWin(COYOTE_RED);

  // Sinon, si la valeur `left` du yellowCoyote (nous avons créé plus
  // haut la variable `leftYellow`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote jaune gagne !`
  
  else if (leftYellow > windowWidth && !arrivedPlayers.includes(COYOTE_YELLOW))
    checkWin(COYOTE_YELLOW);

  function checkWin(player) {
    restartButton.style.display = "block";
    var message = " perd.";

    if (arrivedPlayers.length === 0)
      message = " gagne !";

    alert("Coyote " + getCoyoteName(player) + message);
    arrivedPlayers.push(player);
  }

  function getCoyoteName(coyote){
    if (coyote === "red")
      return "rouge";
    return "jaune";
  }
}

// ---BONUS---

// Lorsque le perdant termine sa course, ajouter une alerte
// qui indique quel coyotte a perdu.

// Ecrire une fonction qui permet de recommencer une partie lorsque
// le premier coyotte arrive à la fin de la course.
function restartGame() {
  updatePlayerPosition(COYOTE_RED, 0);
  updatePlayerPosition(COYOTE_YELLOW, 0);

  gamePage.style.display = "none";
  landingPage.style.display = "flex";
  arrivedPlayers = [];
}

function updatePlayerPosition(player, position) {
  var coyote = document.getElementById(player);

  if (coyote != undefined)
    coyote.style.left = position + "px";
}

restartButton.addEventListener("click", restartGame);