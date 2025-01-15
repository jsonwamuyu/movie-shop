
const path = require('path');
const moviesPath = path.join(__dirname, '../data/movies.json');

const movieService = {
    getAll: () => [...movies],
    
    add: (movie) => {
        movie.id = movies.length + 1;
        movies.push(movie);
        return movie;
    },
    
    update: (id, updateData) => {
        const index = movies.findIndex(m => m.id === id);
        if (index !== -1) {
            movies[index] = { ...movies[index], ...updateData };
            return movies[index];
        }
        return null;
    },
    
    delete: (id) => {
        const initialLength = movies.length;
        movies = movies.filter(m => m.id !== id);
        return movies.length !== initialLength;
    }
};

module.exports = movieService;