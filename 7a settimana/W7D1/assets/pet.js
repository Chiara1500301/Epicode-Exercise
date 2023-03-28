let petNameInputReferences=document.getElementById('petName')
let ownerNameInputReferences=document.getElementById('ownerName')
let speciesInputReferences=document.getElementById('species')
let breedInputReferences=document.getElementById('breed')
let addButtonReferences= document.getElementById('add')
let petsListReference= document.getElementById('pets-list')
let pets=[]
class Pets{
    constructor(petName,ownerName,species,breed){
        this.petName=petName
        this.ownerName=ownerName
        this.species=species
        this.breed=breed
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
addButtonReferences.addEventListener('click',()=>{
    console.log('bottone cliccato!')
    let newPet= new Pets(
        petNameInputReferences.value,
        ownerNameInputReferences.value,
        speciesInputReferences.value,
        breedInputReferences.value
    )
    console.log(newPet)
    console.push(newPet)
    console.log(Pets)
    petNameInputReferences.value=''
    ownerNameInputReferences.vale=''
    speciesInputReferences.value=''
    breedInputReferences.value=''
    renderList
})