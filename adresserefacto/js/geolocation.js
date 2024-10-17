export function getPosition() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject('La géolocalisation n\'est pas supportée par votre navigateur.');
        }
    });
}
