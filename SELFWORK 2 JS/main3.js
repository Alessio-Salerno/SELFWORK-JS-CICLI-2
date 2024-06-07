let somma_totale = 0;
let counter = 0;


console.log('Numeri pari da 1 a 20');

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
 }
else{
    // FARE LA SOMMMA DI TUTTI I NUMERI DISPARI
    somma_totale = somma_totale + i;
     // LA VARIABILE COUNTER SVOLGE LA FUNZIONE DI INCREMENTATORE E CALCOLERÀ QUANTI VALORI CI SONO DISPARI
      counter++
 }
}

console.log(`somma_totale_dispari = ${somma_totale}`);
console.log(`counter = ${counter}`);

console.log(`risultato media = ${somma_totale / counter}`);






