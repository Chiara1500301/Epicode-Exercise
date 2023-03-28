
class User{
    constructor(name,surname,age,location){
        this.name=name
        this.surname=surname
        this.age=age
        this.location=location 
    }

comparer(User) {
    if(this.age>User.age){
        return `${this.name}${this.surname} è più vecchio di ${User.name}${User.surname}`;

    }else if(this.age<User.age){
        return `${this.name}${this.surname} è più giovane di ${User.name}${User.surname}`;

    }else{
        return`${this.name}${this.surname}ha la stessa età di ${User.name} ${User.surname}`
    }
}
}
const Luca= new User('Luca','Bianchi',"25",'Milano');
const Lorenzo= new User('Lorenzo','Rossi','27','Monza');
console.log(Luca.greet())
console.log(Lorenzo.greet())
console.log(Luca.comparer(Lorenzo))