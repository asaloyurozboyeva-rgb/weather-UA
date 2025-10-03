let cityName = document.getElementById('cityName')
let btn = document.getElementById('btn')



btn.addEventListener('click', ()=>{
    let val = cityName.value
 
   
    searchTemp(val)
    })