// récup des éléments DOM
const latSpan = document.getElementById("latitude");
const lonSpan = document.getElementById("longitude");
const altSpan = document.getElementById("altitude");

const button = document.querySelector("button");

/**
 * Callback a lancer en cas de positionnement de l'utilisateur
 * @param {GeolocationPosition } position Position GPS
 */
const geo_ok = (position) => {
    console.log(position);
    // Modifs DOM
    latSpan.innerText = position.coords.latitude;
    lonSpan.innerText = position.coords.longitude;
    altSpan.innerText = position.coords.altitude;
}

/**
 * Callback en cas d'erreur au positionnement
 * @param {GeolocationPositionError} error erreur de positionnement
 */
const geo_error = (error) => {
    console.error(error);
    alert("L'application a besoin de la géolocalisation pour fonctionner correctement");
}

// Option pour la géolocalisation
const geo_options = {
    enableHighAccuracy: true, // Augmente la précision de la géolocalisation
    maximumAge        : 30000,// Durée de vie en milliseconde  du cache de geolocatlisation
    timeout           : 27000 // Temps max avant d'obtenir une reponse en milliseconde
}

// Ajout d'un écouteur d'événement sur le click du bouton
button.addEventListener("click",
    // appel de l'API HTML5 pour localiser l'utilisateur
    () => {
        navigator.geolocation.getCurrentPosition(geo_ok, geo_error, geo_options);
    }
)
