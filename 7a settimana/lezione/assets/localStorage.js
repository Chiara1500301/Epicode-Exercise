const textAreaReference=document.getElementById('inputField')
const loadButtonRefences=document.getElementById('load')
const resetButtonReferncese=document.getElementById('reset')
const saveButtonReference=document.getElementById('save')
const reset=function(){
    textAreaReference.value=''
    console.log('Text area has been resetted')
}
const save=function(){
const currentText=textAreaReference.value
localStorage.setItem('textAreaValue', currentText)
console.log('Text area value has been saved')
}
const load=function(){
const loadedText=localStorage.getItem('textAreaValue')
if(loadedText){
    textAreaReference.value=loadedText
}else{
    console.log('ERRORE!non esite al momento contenuto salvato')
}
}
resetButtonReferncese.addEventListener('click',reset)
saveButtonReference.onclick=save
loadButtonRefences.onclick=load