/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/
/* 6.5. Boucles imbriquées
  On peut très bien imbriquer une boucle dans une boucle.
  Syntaxe :
    for (let i = ...; i ... ; i ...) {
      for (let j = ...; j ...; j ...) {
        // instructions qui font intervenir les deux compteurs i et j
      }
    }
  Principe de fonctionnement :
  C'est
    - d'abord la boucle interne qui boucle (c'est celle qui boucle le plus vite)
    - et puis la boucle externe (c'est celle qui boucle le plus lentement)
*/

/*
  Pour vous familiariser avec les boucles imbriquées :
  - Faites une table d'évolution des variables !
  - Écrivez l'expression à afficher dans le console.log d'une manière alternative,
    en utilisant le concept de template littéral.
*/
const operateur= parseInt(prompt("donner le valeur de l’operateur"));
const operantes= parseInt(prompt("donner le valeur de l’operantes"));

for (let i = 0; i <=operateur ; i++) {
    for (let j = 0; j <=operantes ; j++) {
        console.log(`${i}*${j} = ${i*j}`);
    }
}

//debugger ouvrir la console.log
console.log("boucle imbriquer prof");
for (let i = 0; i <= 5; i++) {
    //debugger//mots clef reserver du langage, l'endroit ou arreter le code et ou on peux exeecuter etapes par etapes manuellement
    console.log("i"+ "=" +  i)
    for (let j = 0; j < 10 ; j++) {
    console.log("j"+ "=" +  j)
    }
}
