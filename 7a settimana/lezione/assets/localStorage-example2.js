let nameReference=document.getElementById('appointmentName')
let dateReference=document.getElementById('appointmentDate')
let formReference=document.getElementById('appointmentForm')
let listReference=document.getElementById('appointmentList')
let appoinments=[]
formReference.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('Form inviato!')
    let existingAppointments = localStorage.getItem('appoinments')
    ?JSON.parse(localStorage.getItem('appointments'))
    :[]
    existingAppointments.push({
        name: nameReference.value,
        date: dateReference.value,
    })
    localStorage.setItem('appointments',JSON.stringify(existingAppointments))   
    renderList()
})
const renderList= function(){
    let appoinments=[]
    let savdedAppoinments= localStorage.getItem('Appointments')
    if(savedAppointments){
        appoinments=JSON.parse(savedAppointments)
    }
    appoinments.forEach(app)=>{
        let newLi= document.createElement('li')
        listReference.appendChild
    }

}