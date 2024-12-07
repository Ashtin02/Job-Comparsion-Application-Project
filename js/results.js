"use strict";

window.addEventListener('load', init);

function init() {
    const resultsContainer = document.getElementById('results');
    const resetButton = document.getElementById('reset-button');

    // Retrieve the results from localStorage
    const results = localStorage.getItem('results');
    
    // Check if results exist
    if (results) {
        // Display results in the results container
        resultsContainer.textContent = results;
    } else {
        // If no results, inform the user
        resultsContainer.textContent = "No comparison results found. Please complete a comparison first!";
    }

    // Set up the reset button to clear the results and redirect back to the dashboard
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('results');
        window.location.href = 'dashboard.html'; // Redirect back to the dashboard
    });
}
