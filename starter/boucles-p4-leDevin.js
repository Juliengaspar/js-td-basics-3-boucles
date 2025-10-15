/* BOUCLES - PRÉPA 4 : Le Devin
N.B. Cet exercice est à faire après avoir vu les fonctions
Ecrivez un programme qui va deviner le nombre auquel vous avez pensé (voir livre p.99 et 100)
- Demandez à l'utilisateur d'entrer un nombre entier entre 1 et 10 auquel il pense
	et annoncez-lui que vous allez essayer de le deviner.
	Le message pourrait être : "Pensez très fort à un nombre entier entre 1 et 10
	et entrez-le ici (je ne regarde pas, c'est promis !), je vais essayer de le deviner…"
- Affichez "Ce n'est pas …" tant que vous n'avez pas trouvé le nombre auquel il pensait
	et puis "J'ai trouvé ! Vous pensiez à …" lorsque vous avez trouvé.
*/

/* AIDES :
- Vous allez avoir besoin de la fonction Math.random() :
	cette fonction vous donne un nombre aléatoire entre 0 et 1 ;
- Vous allez avoir besoin aussi de la fonction Math.floor() :
	cette fonction vous donne l'arrondi vers le bas d'un nombre décimal :
	par exemple Math.floor(10.8) = 10 (la fonction tronque, ne garde que la partie entière)
- Pour une meilleure compréhension, prenez le temps de consulter la documentation pour savoir comment utiliser
	ces fonctions, y compris leurs paramètres et les valeurs qu'elles retournent.
*/
// Écrivez le code JavaScript pour résoudre cet exercice en essayant de deviner le nombre auquel l'utilisateur pense.

const userNumber = parseInt(prompt('"Pensez très fort à un nombre entier entre 1 et 10 et entrez-le ici (je ne regarde pas, c’est promis !)'))
/*
console.log('version prof');
let i = 1;
if (!isNaN(userNumber)){//tester si ce n'est pas un nombre, quand on double la negation ça inverse la negation
   // for (let i = 0; i != userNumber; i++) {//tand que c'est different que userNumber

    while (i !== userNumber ){//tand que i est different de userNumber
        console.log(`Ce n’est pas ${i}`);
        i++
    }
    console.log(`j’ai trouvé ! vous pensiez à ${i}`);
}

 */

console.log('version prof avec random');
let i = Math.ceil(Math.random()*10 );
if (!isNaN(userNumber)){//tester si ce n'est pas un nombre, quand on double la negation ça inverse la negation
    while (i !== userNumber ){//tand que i est different de userNumber
        console.log(`Ce n’est pas ${i}`);
        i = Math.ceil(Math.random()*10 );
    }
    console.log(`j’ai trouvé ! vous pensiez à ${i}`);
}


/*
console.log('version prof avec random et  do while');
let i ;
if (!isNaN(userNumber)){//tester si ce n'est pas un nombre, quand on double la negation ça inverse la negation
    do {
        i = Math.ceil(Math.random()*10 );
        console.log(`Ce n’est pas ${i}`);
    }while(i !==  userNumber);
    console.log(`j’ai trouvé ! vous pensiez à ${i}`);

}

 */


/*

function getRandomInt(max) {
    return Math.floor(Math.random() * max+1);
}

let nbrAleatoire;
let trouvee = false;

let nbrEssaie = 0;
if (userNumber >0 && userNumber <= 10 ){

    while (trouvee === false){
        nbrAleatoire = getRandomInt(10);

        if (nbrAleatoire === userNumber){
            trouvee = true;
            console.log(trouvee);
            console.log(`J'ai trouvé en ${nbrEssaie} essai ! Vous pensiez à ${userNumber}`);

        }else {
            trouvee = false;
            nbrEssaie = nbrEssaie+1;
        }
    }

}else {
    console.log("vous avez entrée un nombres superieur a 10 ou inférieur à 0 ");
}

 */