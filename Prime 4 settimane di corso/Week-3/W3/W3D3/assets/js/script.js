var tasks= []
var tagLi=document.getElementById('lista')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    var input= document.getElementById('input').value;
    console.log(input);
    tasks.push(input);
    mostra(input,indice);
});
mostra=()=>{
    tagLista.innerHTML='';
    for(let i=0; i<tasks.length;i++){
        tagLista.innerHTML +=`<li}>${_input} <button onClick='elimina(${tasks[i]})'>X</button></li>`
    }
    };

elimina= (indice) => {
tasks.splice(indice,1);
mostra();
}

