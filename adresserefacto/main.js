import { getPosition } from "./js/geolocation.js";
import { getAddressFromCoords } from "./js/addressApi.js";
import { waitFor, showError, hideError } from "./js/utils.js";

const geoButton = document.getElementById('geo-button');
const addressResult = document.getElementById('address-result');

geoButton.addEventListener('click', () => {
    addressResult.textContent = 'Localisation en cours...';

    getPosition()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            addressResult.textContent = `Votre adresse est : ${address}`;
        })
        .catch(error => {
            showError(error.message || error);

            waitFor(3).then(() => {
                hideError();
            });
        });
});