const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
        API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;



/*$.get(API_URL, function (data) {
    $("#title").text(data.results[0].original_title);
    let imgg = "https://image.tmdb.org/t/p/w500" + data
        .results[0]
        .poster_path;
    $("#poster").attr('src', imgg);
});
*/
const genres = []
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')


getMovies(API_URL);

function getMovies(url) {
    lastUrl = url;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            if (data.results.length !== 0) {
                showMovies(data.results);
                currentPage = data.page;
                nextPage = currentPage + 1;
                prevPage = currentPage - 1;
                totalPages = data.total_pages;

                current.innerText = currentPage;

                if (currentPage <= 1) {
                    prev
                        .classList
                        .add('disabled');
                    next
                        .classList
                        .remove('disabled')
                } else if (currentPage >= totalPages) {
                    prev
                        .classList
                        .remove('disabled');
                    next
                        .classList
                        .add('disabled')
                } else {
                    prev
                        .classList
                        .remove('disabled');
                    next
                        .classList
                        .remove('disabled')
                }