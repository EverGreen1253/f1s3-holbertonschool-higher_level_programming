$.get("https://swapi-api.hbtn.io/api/films/?format=json", (json) => {
  // console.log(json);

  for (let item of json.results) {
    $('#list_movies').append('<li>' + item.title + '</li>');
  }
});