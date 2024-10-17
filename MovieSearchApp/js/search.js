let currentPage = 1;
let totalPages = 1;
let currentQuery = '';


document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    currentQuery = document.getElementById('search-input').value;
    currentPage = 1;
    
    const data = await searchMovies(currentQuery, currentPage);
    totalPages = data.total_pages;
    
    displayMovies(data.results);
    updatePagination();
});

document.getElementById('prev-page').addEventListener('click', async () => {
    if (currentPage > 1) {
        currentPage--;
        const data = await searchMovies(currentQuery, currentPage);
        displayMovies(data.results);
        updatePagination();
    }
});

document.getElementById('next-page').addEventListener('click', async () => {
    if (currentPage < totalPages) {
        currentPage++;
        const data = await searchMovies(currentQuery, currentPage);
        displayMovies(data.results);
        updatePagination();
    }
});

function displayMovies(movies) {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = ''; 

    if (movies.length === 0) {
        moviesList.innerHTML = '<p>Aucun film trouvé</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
        `;
        
        moviesList.appendChild(movieElement);
    });
}

function updatePagination() {
    document.getElementById('current-page').textContent = currentPage;
    document.getElementById('total-pages').textContent = totalPages;

    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;

    document.getElementById('pagination').style.display = totalPages > 1 ? 'block' : 'none';
}