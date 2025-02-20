"use strict";

window.addEventListener('load', init);

function init() {
    const resultsContainer = document.getElementById('results');
    const resetButton = document.getElementById('reset-button');
    const returnButton = document.getElementById('return-button');

    // Loop through all localStorage keys to find results
    let hasResults = false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('results')) {
            hasResults = true;
            const result = localStorage.getItem(key);

            // Create a div for each result and add it to the results container
            const resultDiv = document.createAttribute('div');
            resultDiv.classList.add('result-item');
            resultDiv.innerHTML = `
                <h2>${key}</h2>
                <p>${result}</p>
            `;
            resultsContainer.appendChild(resultDiv);
        }
    }

    if (!hasResults) {
        // If no results are found, inform the user
        resultsContainer.textContent = "No comparison results found. Please complete a comparison first!";
    }

    // Set up the reset button to clear the results and redirect back to the dashboard
    resetButton.addEventListener('click', () => {
        // Clear only the results from localStorage
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith('results')) {
                localStorage.removeItem(key);
            }
        }
        window.location.href = 'dashboard.html'; // Redirect back to the dashboard
    });

    // Redirect back to the dashboard without resetting the data
    returnButton.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

}
