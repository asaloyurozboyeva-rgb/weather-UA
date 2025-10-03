let card = document.getElementById('card')
let lod = document.getElementById('lod')
let overley = document.querySelector('.overley')


 function searchTemp(city){
    let request = new XMLHttpRequest()
request.addEventListener('readystatechange', ()=>{

   lod.classList.remove('hidden')
   overley.classList.remove('hidden')

    if(request.readyState == 4){
        console.log(request.responseText);
        let data = JSON.parse(request.responseText)

        lod.classList.add('hidden')
        overley.classList.add('hidden')

        
        let temp = Math.floor(data.main.temp)

         card.innerHTML = ` 
         <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'/>
         <h1>${temp}°C</h1>
         <h2>${data.name}</h2>

         `
          
         
       
    }
})
request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2943a949b69633861273b83220e6faa2&units=metric`)
request.send()

 }