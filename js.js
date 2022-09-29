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

        // var video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${i.id}" title="placeholder" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        `
        var title = `<h1>${i.title}</h1>`
        var img = `<img class="kort" src="${IMG_URL + i.poster_path}" alt="film bild">`
        var kort = `<div onclick="bytSida(${i.id})" class="mainKort">${title+img}</div>`
        $("#kort").append(kort)
        
    });
    // $("#title").text(data.results[0].original_title);
    // let imgg = "https://image.tmdb.org/t/p/w500" + data
    //     .results[0]
    //     .poster_path;
    // $("#poster").attr('src', imgg);
});

function bytSida(id){
    window.location.href = `trailer.html/?id=${id}`
}
