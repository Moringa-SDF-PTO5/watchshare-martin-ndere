document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/movie list')
     .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const moviesList = document.getElementById('movies-list');

        data.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            // Ensure that each property is accessed properly and check for undefined values
            const title = movie.title
            const genre = movie.genre || 'Unknown Genre';
            const director = movie.director || 'Unknown Director';
            const year = movie.year || 'Unknown Year';
            const costshare = movie.costshare || 'Unknown Cost';
            const rating = movie.rating || 'Unknown Rating';
            const image = movie.image || 'placeholder.jpg'; // Provide a default image path if not available
        

            movieDiv.innerHTML = `
                <h2>${title}</h2>
                <img src="${image}" alt="${title}" class="movie-image">
                <p>Genre: ${genre}</p>
                <p>Director: ${director}</p>
                <p>Year: ${year}</p>
                <p>Costshare: $${costshare}</p>
                <p>Rating: ${rating}/5</p>
                <button onclick="reviewMovie('${title}')">Review</button>
            `;

            moviesList.appendChild(movieDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    const purchaseBtn = document.getElementById('purchase-btn');

    purchaseBtn.addEventListener('click', function() {
        const purchaseDecision = confirm('Do you want to purchase?');

        if (purchaseDecision) {
            alert('You chose to purchase!');
        } else {
            alert('You chose not to purchase.');
        }
    });
});

function reviewMovie(title) {
    const review = prompt(`Write your review for ${title}:`);
    if (review !== null && review !== "") {
        alert(`Thank you for your review of ${title}!`);
    }
}