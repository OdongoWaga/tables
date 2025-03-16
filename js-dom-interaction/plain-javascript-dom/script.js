// This file contains the JavaScript code that interacts with the DOM.

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded. Running script.js...");

    const sortButton = document.getElementById("sortButton");
    if (!sortButton) {
        console.error("Sort button not found");
        return;
    }

    const tbody = document.getElementById("dataTable").querySelector("tbody");
    if (!tbody) {
        console.error("Table body not found");
        return;
    }

    sortButton.addEventListener("click", function() {
        console.log("Sort button clicked");

        // Convert the NodeList of table rows into an array
        const rowsArray = Array.from(tbody.querySelectorAll("tr"));
        console.log("Rows before sorting:", rowsArray);

        // Sort rows alphabetically by the text in the first cell (Name)
        rowsArray.sort((a, b) => {
            const nameA = a.querySelector("td").textContent.trim().toLowerCase();
            const nameB = b.querySelector("td").textContent.trim().toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Re-append sorted rows to tbody
        rowsArray.forEach(row => tbody.appendChild(row));
        console.log("Rows sorted and re-appended");
    });
});