const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
        API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


//const {title, poster_path, vote_average, overview, id} = movie;
$.get(API_URL, function (data)
 {
    console.log(data)
    data.results.forEach(i => {
            var title = `<h1>${i.title}</h1>`
            var overview = `<h3>${i.overview}</h3>`
            var img = `<img class="kort" src="${IMG_URL + i.poster_path}" alt="film bild">`
            var kort = `<div onclick="bytSida(${i.id})" class="mainKort">${title+img+overview}</div>`
            $("#kort").append(kort)

    });
    // $("#title").text(data.results[0].original_title);
    // let imgg = "https://image.tmdb.org/t/p/w500" + data
    //     .results[0]
    //     .poster_path;
    // $("#poster").attr('src', imgg);
});

function bytSida(id){
    window.location.href = `trailer.html?id=${id}`
}
