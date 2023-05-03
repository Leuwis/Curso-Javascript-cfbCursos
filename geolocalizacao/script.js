const long = document.getElementById("long")
const lati = document.getElementById("lati")

if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
    
}else{
    console.log("Geolocalização não suportada")
}

function mostrarLocalizacao(pos){
    lati.innerHTML = "latitude: " + pos.coords.latitude
    long.innerHTML = "longitude: " + pos.coords.longitude
}

function erroLocalizacao(pos){
    console.log("erro ao obter a localização")
}