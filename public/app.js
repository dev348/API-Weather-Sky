
let lat,long;
const apikey = "2f793e9dbbece38bc1d28937156e3b09"


const button = document.getElementById('submit');

if('geolocation' in navigator){
    console.log("geolocation available");
    
    navigator.geolocation.getCurrentPosition(async pos => {
      
      (pos.coords.latitude, pos.coords.longitude);
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      document.getElementById('lat').textContent = lat;
      document.getElementById('long').textContent =long;
      const api_url = `/weather/${lat},${long}`
      const res = await fetch(api_url);
       const json = await res.json();
        console.log(json);
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


