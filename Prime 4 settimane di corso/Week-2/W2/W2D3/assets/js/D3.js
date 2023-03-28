/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
var numero1 = 8;
var numero2 = 6;
if(numero1>numero2){
  document.getElementById('esercizio1').innerHTML = numero1;
}
else{
    document.getElementById('esercizio1').innerHTML = numero2;
  }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.


/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = 5;
if(numero1 !=5){
  document.getElementById('esercizio2').innerHTML = 'equal';
}
else{
    document.getElementById('esercizio2').innerHTML = 'not equal';
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = (15 % 5);
if(numero1==0 ){
  document.getElementById('esercizio3').innerHTML = 'divisibile per 5' ;
}
else{
    document.getElementById('esercizio3').innerHTML = 'non divisibile per 5';
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1=8;
var numero2=6;
if((numero1+numero2==8)||(numero1-numero2==8)||(numero1=8)|| (numero2=8)){
document.getElementById('esercizio4').innerHTML='verificato';
}
else
document.getElementById('esercizio4').innerHTML=' Non verificato';
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart=60
if(totalShoppingCart > 50)
document.getElementById('esercizio5').innerHTML= totalShoppingCart
else
document.getElementById('esercizio5').innerHTML= totalShoppingCart+10
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart=30;
var saldo=(totalShoppingCart*20)/100
if(totalShoppingCart > 50)
document.getElementById('esercizio6').innerHTML= totalShoppingCart - saldo;
else
document.getElementById('esercizio6').innerHTML= (totalShoppingCart-saldo)+10;
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero=1;
var numero1=2;
var numero2=3;
if( numero>numero1>numero2){
document.getElementById('esercizio7').innerHTML=numero+','+numero1+','+numero2 +'.'
}
else if(numero1>numero>numero2){
document.getElementById('esercizio7').innerHTML=numero1+','+numero+','+numero2;
}
else(numero2>numero1>numero)
document.getElementById('esercizio7').innerHTML=numero2+','+ numero+','+ numero1;
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero=10;
if(numero%2==0){
  document.getElementById('esercizio9').innerHTML='pari';

}
else
document.getElementById('esercizio9').innerHTML= 'dispari';
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city='Toronto'
document.getElementById('esercizio11').innerHTML=me.name+me.lastName+me.skills+me.city;


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.lastName.pop('Doe');
document.getElementById('esercizio12').innerHTML=me.name+me.lastName+me.skills+me.city;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
document.getElementById('esercizio13').innerHTML=me.name+me.lastName+me.skills+me.city;
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var array=[];
array.push('1', '2' , '3' , '4' ,'5', '6', '7','8' , '9','10');
document.getElementById('esercizio13').innerHTML;
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.slice(9, 1, '100');
document.getElementById('esercizio13').innerHTML;