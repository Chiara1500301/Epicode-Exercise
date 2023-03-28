let nameInputReferrences=document.getElementById('name-field')
let surnameInputReferences=document.getElementById('surname-field')
let addButtonREferences= document.getElementById('add')
let contacsListReference= document.getElementById('contacs-list')
let contacts=[]
class Contact{
    constructor(name,surname){
        this.name=name
        this.surname=surname
    }
}
const renderList=()=>{
    contacsListReference.innerHTML=''
    contacts.forEach(contact=>{
        const newLi=document.createElement('li')
        newLi.innerText=contact.name+' '+contact.surname
        contacsListReference.appendChild(newLi)
    })
}
addButtonREferences.addEventListener('click',()=>{
    console.log('bottone cliccato!')
    let newContact= new Contact(
        nameInputReferrences.value,
        surnameInputReferences.value
    )
    console.log(newContact)
    console.push(newContact)
    console.log(contacts)
    nameInputReferrences.value=''
    surnameInputReferences.vale=''
    renderList
})