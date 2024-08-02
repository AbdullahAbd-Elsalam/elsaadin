function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Show the spinner
    showSpinner();

    // Simulate a delay, then hide the spinner
    setTimeout(() => {
        hideSpinner();
    }, 3000); // Adjust the delay as needed
});