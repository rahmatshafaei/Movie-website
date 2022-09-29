const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
        API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const url = new URL(window.location.href)
const id = url.search.slice(4)

$.get(API_URL, function (data)
 {   
    data.results.forEach(i => {
    fetch(BASE_URL + '/movie/' + i.id + '/videos?' + API_KEY)
    .then(res => res.json())
    .then(vD => {
        if(i.id == id){
            if(vD.results[5] != undefined){
                var video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${vD.results[5].key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }
            else if(vD.results[5] === undefined){
                var video = `Video Undefined`;
            }
            var kort = `<div class="mainKort">${video}</div>`
            $("body").append(kort)
        }
        else
        console.log("Fel id")
    })
    })
 });
