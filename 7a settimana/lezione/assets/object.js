console.log('recap oggetti')

let myHouse={
     //definiamo un oggetto in JS con la definizione letterale:aprendo le graffe 
    //un oggetto può contenere infinite coppie chiave/valore possono definire una carettisristica dell'oggett
    //(attributo o prprietà)
    //oppure una funzionalità dell'oggetto
    //(un metodo)
    color:'yellow',
    floors:10,
    collapse: function(){
        console.log('ouch!')
    }
}
// per accedere alle proprietà/metodi esistono du modi:
//1) dot notation:
console.log(myHouse.floors)//10
//2)square brackets notation
console.log(myHouse['color-of-the-wall'])
//invochiamo collapse() con la dot notation
myHouse.collapse()

let person={
    firstName: 'Mike',
    lastName: 'Bongiorno',
    address:{
        //address sarà a sua volta un oggetto
        strett:'Via Roma',
        zipCode:12345,
    } 
}
console.log(person.address.zipCode)

person.firstName='Stefano'
person.age=35
console.log('person', person)
//metodi negli oggetti
let anotherPerson={
    name:'Mario',
    surname:'Rossi',
    sayHello: function(){
        console.log('Ciao il mio nome è'+ this.name)//funziona?
    }
}
anotherPerson.sayHello()

let anotherPerson2= anotherPerson // creo un nuovo riferimento per lo stesso oggetto
anotherPerson=null //elimina il riferimento originale dell'oggetto
//adesso anotherPerson2 è l'unico modo rimasto pr accedere all'oggetto 
anotherPerson2.sayHello()
//come creare  molti oggetti 'simili' in JS?
//farli a mano non èuna grande idea
//la metodologia  è creare una speciale funzione: la funzione COSTRUTTORE
