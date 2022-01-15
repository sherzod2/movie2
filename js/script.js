let elResult = document.querySelector(".movies__result");
let elList = document.querySelector(".movies__list");
let elSelect = document.querySelector(".select");
let elForm = document.querySelector(".form");

elResult.textContent = films.length;

const generateGenres = function (films) {
  const uniqueGenres = [];

  films.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);

        let newOption = document.createElement("option");

        newOption.setAttribute("value", `${genre}`);

        newOption.textContent = `${genre}`;

        elSelect.appendChild(newOption);
      }
    });
  });
};

const renderFilms = function (filmsArray, element) {
  filmsArray.forEach((movie) => {
    //CREATE
    let newItem = document.createElement("li");
    let newCard = document.createElement("div");
    let newImg = document.createElement("img");
    let newCardBody = document.createElement("div");
    let newCardTitle = document.createElement("h5");
    let newCardGenresList = document.createElement("ul");

    movie.genres.forEach((genre) => {
      let newCardGenres = document.createElement("li");

      newCardGenres.textContent = genre;

      newCardGenresList.appendChild(newCardGenres);
    });

    //SET ATTRIBUTE
    newItem.setAttribute("class", "movies__item");
    newCard.setAttribute("class", "card movies__card");
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("src", movie.poster);
    newCardBody.setAttribute("class", "card-body");

    //TEXT CONTENT
    newCardTitle.textContent = movie.title;

    //APPEND CHILD
    element.appendChild(newItem);
    newItem.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardGenresList);
  });
};

generateGenres(films);

renderFilms(films, elList);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let selectValue = elSelect.value;
  let genreArray = [];

  films.forEach((film) => {
    if (film.genres.includes(selectValue)) {
      genreArray.push(film);
    }
  });

  console.log(typeof selectValue);

  console.log(selectValue);

  if (selectValue === "all") {
    elList.innerHTML = null;
    renderFilms(films, elList);
    elResult.textContent = films.length;
  } else {
    elList.innerHTML = null;
    renderFilms(genreArray, elList);
    elResult.textContent = genreArray.length;
  }
});
