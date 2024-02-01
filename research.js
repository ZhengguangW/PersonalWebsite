function showDetails(htmlpath) {
    // Hide the grid
    document.querySelector('.grid-container').style.display = 'none';

    // Show the details container
    document.getElementById('details-container').style.display = 'block';

    // Display the new information
    fetch(htmlpath)
        .then(response => response.text())
        .then(htmlContent => {
            // Display the new information (HTML content)
            document.getElementById('details-content').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error fetching HTML file:', error));
}

function showGrid() {
    // Hide the details container
    document.getElementById('details-container').style.display = 'none';

    // Show the grid
    document.querySelector('.grid-container').style.display = 'grid';
}