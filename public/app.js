
let lat,long;


const button = document.getElementById('submit');


if('geolocation' in navigator){
    console.log("geolocation available");
    
    navigator.geolocation.getCurrentPosition(async pos => {
      
      (pos.coords.latitude, pos.coords.longitude);
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      document.getElementById('lat').textContent = lat;
      document.getElementById('long').textContent =long;
    })
}else{
    console.log('geolocation is on available');
}

button.addEventListener('click',async event =>{
    const data = {lat, long};
    const options = {
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
}

const res = await fetch("/sky",options);
const  location = await res.json()
console.log(location);

});


