// redirect.js

// Check if the user is on a device (mobile, tablet, etc.)
function isDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

// Redirect to shutdown.html if the user is on a device
if (isDevice()) {
    window.location.href = "shutdown.html";
}