console.log("Hello World!");
//1 boucle while
//(condition de sortie)= quand on va sortir de la boucle pour ne pas faire une boucle infini(ATTENTION)

//10 tours de boucles avec while
console.log("10 tours de boucles avec while");
let i = 1;
while (i<=10){
    console.log("boujour");
    i++;// i = i +1; || i+= number pour avancer de tell nombre
}
console.log(i);

//2 boucle do while la condition est fait a la sortie de la boucle

//9 tours de boucles avec do while car c'est stritement plus petit que non paq egales 10
console.log("10 tours de boucles avec do while");
do {
    //il vas s'executer aux mois une fois car il a le do puis il vas verifier le condition
    i++;
    console.log("boujour");
}while(i < 10);


//3 boucle de for ou les 3 instruction d'une boucle avec chaque fois un, pour terminer une instruction le 1 === initialisation/ 2 la condition / 3 la crementation(mise a jour de la variables)==> pour ne pas faire une boucle infinis [{()}}(
console.log("10 tours de boucles avec for");
for (let j = 0; j < 10; j++) {
    console.log("boujour");

}

//faire la tables de multiplcation de 2 (1X2= 2/. 2X2 = 4 /...)
//&& attetion boucle imbriquer
console.log("la tables de multiplcation de 2")
/*let table = 2
for (let k = 0; k <= 10; k++) {
   // console.log(` ${k}*${2} = ${k * 2} `);
    //operation ternaire
    console.log(`${k < 10 ? ' ' :  '' } ${k}*${table} = ${k * table} `);
}
table = 2;
for (let k = 0; k <= 10; k++) {
   // console.log(` ${k}*${2} = ${k * 2} `);
    //operation ternaire
    console.log(`${k < 10 ? ' ' :  '' } ${k}*${table} = ${k * table} `);
}
 table = 3
for (let k = 0; k <= 10; k++) {
   // console.log(` ${k}*${2} = ${k * 2} `);
    //operation ternaire
    console.log(`${k < 10 ? ' ' :  '' } ${k}*${table} = ${k * table} `);
}


 */
//boucle imbriquer
console.log("la tables de multiplcation de 2==>10")
for (let j = 2; j <=10 ; j++) {
    for (let k = 1; k <=10 ; k++) {
    console.log(`${k < 10 ? ' ' :  '' } ${k}*${j} = ${k * j} `);

    }
}
