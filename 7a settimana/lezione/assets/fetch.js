//fetch è il metodo più moderno per il iviare una request da un client
//una request rappresenta una ' richiesta' inviata da un browser/smartphone per:
//1)richiedere dati(GET)
//2) creare nuove risorse(POST)
//3) modificare una risorsa già esistente(PUT)
//4) eliminare unqa risorsa già esistente(DELETE)
//queste 4 operazioni in gergo vengono definite CRUD (create,read,update,delete)
//una volta che un server riceve una request, la processerà e invierà indietro una
//response('risposta').Questa response, in un mondo perfetto,conterrà sempre
//il risultato dell'oparzione richiesta
//se la response ha avuto esito positivo lo status code che otterremo indietro sarà
//nella 'famiglia' dei 200
/*fetch('https://jsonplaceholder.typicode.com/photos').then((response)=>{
    console.log('FINITA LA FETCH!')
    console.log(response)
   return response.json
})
.then((photos)=>{
    console.log("ora è finita l'estrapolazione dei dati")
    console.log('photos', photos)
})
.catch((err)=>{
    console.log(err)
})*/

const getPhotos=async function(){
    try {
        let response=await fetch('https://jsonplaceholder.typicode.com/photos')
    console.log(response)
     if(response.ok){

    
    let photos= await response.json()
    console.log(photos)
 }
    } catch (error) {
       console.log(error) 
    }
    
}

getPhotos()