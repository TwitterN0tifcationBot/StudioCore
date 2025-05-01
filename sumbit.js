// This script isnt working correctly. Developers are not able to fix this currently.

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            submitButton.textContent = 'Review Sent!';
            setTimeout(() => {
                submitButton.textContent = 'SUBMIT';
            }, 5000);
        });
    }
});