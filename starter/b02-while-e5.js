/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 6.2. Boucle WHILE
  La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.
  Syntaxe :
    while (condition) {
      // instructions exécutées tant que la condition est vérifiée
    }
*/

/*
EXEMPLE 5 :
- Affichez en boucle une boîte de dialogue dans laquelle vous permettez à l'utilisateur
  d'entrer une lettre et informez-le qu'il doit saisir "X" pour sortir.
  Le message pourrait être : "Tapez une lettre ou X pour sortir : ".
- Utilisez une boucle 'while' pour répéter le processus jusqu'à ce que l'utilisateur entre "X".
- Pendant chaque itération, affichez une boîte de dialogue pour obtenir une lettre de l'utilisateur et stockez-la dans une variable.
- Ensuite, vérifiez si la lettre saisie est "X". Si c'est le cas, sortez de la boucle.
- Sinon, continuez à demander à l'utilisateur de saisir une lettre.

BONUS :
- Après avoir quitté la boucle, affichez dans la console la chaîne complète saisie par l'utilisateur en concaténant les lettres.
*/
/*
console.log('version prof')
let userInput = '';
let letters = '';
while (userInput !== "X") {
    userInput = prompt("Tapez X pour sortir : ");
    letters += userInput;//acumuler tous les choix qu'on a faits
}
console.log(letters);

 */
console.log('version prof pour sortir quand on rentres un nombre ');
let userNumber = NaN;//regarde si la value is NaN
while (isNaN(userNumber)) {
    userNumber = parseInt(prompt("entrez un nombre: "));
}
console.log(userNumber);
/*
while((userInput !== "x") && (userInput !== "X")) {
    letters = letters +" " +  userInput;
    userInput = prompt("Tapez X pour sortir : ");
}

console.log('voici tous les lettres que vous avez tapper avant X pour sortir');
console.log(letters);
console.log('bien joué vous avez reussi a tapper sur la touche X ou x pour sortir');

 */

// code avec le bonus


