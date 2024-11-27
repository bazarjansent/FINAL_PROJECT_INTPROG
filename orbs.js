// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners for each planet
    document.getElementById('mercury').addEventListener('click', function() {
        showInfoBox('mercuryInfoBox');
    });

    document.getElementById('venus').addEventListener('click', function() {
        showInfoBox('venusInfoBox');
    });

    document.getElementById('earth').addEventListener('click', function() {
        showInfoBox('earthInfoBox');
    });

    document.getElementById('mars').addEventListener('click', function() {
        showInfoBox('marsInfoBox');
    });

    document.getElementById('jupiter').addEventListener('click', function() {
        showInfoBox('jupiterInfoBox');
    });

    document.getElementById('saturn').addEventListener('click', function() {
        showInfoBox('saturnInfoBox');
    });

    document.getElementById('uranus').addEventListener('click', function() {
        showInfoBox('uranusInfoBox');
    });

    document.getElementById('neptune').addEventListener('click', function() {
        showInfoBox('neptuneInfoBox');
    });

    // Function to show the info box and overlay
    window.showInfoBox = function(infoBoxId) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById(infoBoxId).style.display = 'block';
    };

    // Function to close the info box and overlay
    window.closeInfoBox = function() {
        document.getElementById('overlay').style.display = 'none';
        document.querySelectorAll('.info-box').forEach((infoBox) => {
            infoBox.style.display = 'none';
        });
    };

    // Close the info box when clicking on the overlay
    document.getElementById('overlay').onclick = closeInfoBox;
});