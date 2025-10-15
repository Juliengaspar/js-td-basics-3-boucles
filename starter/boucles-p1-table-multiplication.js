/* BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
   "Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
   "Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
   "Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
   1°) avec une boucle FOR
   2°) avec une boucle WHILE
*/

// avec FOR
// Commencez par demander à l'utilisateur la table de multiplication souhaitée et le nombre de valeurs à afficher
// Ensuite, utilisez une boucle FOR pour calculer et afficher les x premières valeurs de la table de multiplication

// avec WHILE
// Répétez le même processus avec une boucle WHILE, en demandant à nouveau la table de multiplication et le nombre de valeurs

const tables = parseInt(prompt("Quelle table souhaitez-vous avoir ?"));
const x = parseInt(prompt("Combien d’éléments souhaitez-vous avoir?"));
console.log('table de multiplication prof ')
if (!isNaN(tables) && !isNaN(x)) {
    console.log('yeah')
    for (let j = 0; j <= x; j++) {
        // ? : ${i<10 ? ' ': ''}//tester si i est inferieur à 10;
        console.log(` ${j<10 ? ' ': ''} ${j} * ${tables} = ${j*tables}`)
    }
}else {
    console.log("il me faut un nombre pour table et le nombre d'element");
}


/*
let result;
console.log("avec la boucle for");
for (let i=0 ; i<=x; i++){
    result= i*tables;
    //console.log(`${i} * ${tableMultiplication} = ${result}`);
    console.log(`   ${tables} * ${i} = ${result} `);
}
console.log("avec la boucle while");
let i = 0;
while (i<= x){
    result= i*tables;
    console.log(`   ${tables} * ${i} = ${result} `);
    i++
}

 */