export function getAddressFromCoords(coords) {
    const { latitude, longitude } = coords.coords;
    const url = `https://api-adresse.data.gouv.fr/reverse/?lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                return data.features[0].properties.label;
            } else {
                throw new Error('Aucune adresse trouvée pour ces coordonnées.');
            }
        })
        .catch(error => {
            throw new Error(`Erreur lors de la récupération de l'adresse : ${error.message}`);
        });
}
