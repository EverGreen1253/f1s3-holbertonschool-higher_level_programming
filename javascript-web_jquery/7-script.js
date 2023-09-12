$.get("https://swapi-api.hbtn.io/api/people/5/?format=json", (json) => {
  // console.log(json);
  $('#character').html(json.name);
});