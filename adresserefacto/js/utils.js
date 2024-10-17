export function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

export function showError(error) {
    const errorElement = document.getElementById('address-result');
    errorElement.textContent = error;
}

export function hideError() {
    const errorElement = document.getElementById('address-result');
    errorElement.textContent = '';
}
