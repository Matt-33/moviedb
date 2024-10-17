const API_KEY = 'c40590fc8e4497f504624189189762a5';
const BASE_URL = 'https://api.themoviedb.org/3';


async function searchMovies(query, page = 1) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des films');
        }
        const data = await response.json();
        return {
            results: data.results,
            page: data.page,
            total_pages: data.total_pages
        };
    } catch (error) {
        console.error('Erreur:', error);
        return {
            results: [],
            page: 1,
            total_pages: 1
        };
    }
}