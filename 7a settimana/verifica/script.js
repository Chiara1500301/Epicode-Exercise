let url="https://u2-assessments.herokuapp.com/travels"
fetch(url)
.then(response=>response.json())
.then(json=>{
    console.log(json)
})