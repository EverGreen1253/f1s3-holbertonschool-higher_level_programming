let character = document.getElementById("character");

fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((json) => {
    // console.log(json);
    character.textContent = json.name;
  })
  .catch((err) => console.error(`Fetch problem: ${err.message}`));