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