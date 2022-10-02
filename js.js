const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

$.get(API_URL, function (data) 
{
    console.log(data)
    data.results.forEach(i => {
            var title = `<h1>${i.title}</h1>`
            var overview = `<h3>${i.overview}</h3>`
            var img = `<img class="kort" src="${IMG_URL + i.poster_path}" alt="${title}>`
            var kort = `<div onclick="bytSida(${i.id})" class="mainKort">${img + overview}</div>`
            $("#kort").append(kort)

        });
});

function bytSida(id) {
    window.location.href = `trailer.html?id=${id}`
}
