const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


let currentPage = 1;
let totalPages;


const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


prevButton.addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
    }
});
nextButton.addEventListener("click", function() {
    if (currentPage < totalPages) {
        currentPage++;
        loadPage(currentPage);
    }
});


function loadPage(pageNumber) {
   
    $.get(`${API_URL}&page=${pageNumber}`, function(data) {
        totalPages = data.total_pages;
        
        $("#kort").empty();
        data.results.forEach(i => {
            // Append the new movies to the page
            var title = `<h1>${i.title}</h1>`
            var overview = `<h3>${i.overview}</h3>`
            var img = `<img class="kort" src="${IMG_URL + i.poster_path}" alt="${title}>`
            var kort = `<div onclick="bytSida(${i.id})" class="mainKort">${img + overview}</div>`
            $("#kort").append(kort)
        });
    });
}


$( "#searchForm" ).submit(function( event ) {
  event.preventDefault();
  var searchValue = $("#search").val();
  getMovies(searchValue);
});


function getMovies(searchValue = "") {
  var url = searchValue == "" ? API_URL : `${searchURL}&query=${searchValue}`;
  $.get(url, function (data) {

    $("#kort").empty();
    data.results.forEach(i => {
            var title = `<h1>${i.title}</h1>`
            var overview = `<h3>${i.overview}</h3>`
            var img = `<img class="kort" src="${IMG_URL + i.poster_path}" alt="${title}">`
            var kort = `<div onclick="bytSida(${i.id})" class="mainKort">${img + overview}</div>`
            $("#kort").append(kort)
        });
  });
}

console.log(IMG_URL)
function bytSida(id) {
    window.location.href = `trailer.html?id=${id}`
}

getMovies();
    