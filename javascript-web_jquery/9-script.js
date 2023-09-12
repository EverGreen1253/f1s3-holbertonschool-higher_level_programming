$.get("https://hellosalut.stefanbohacek.dev/?lang=fr", (json) => {
  //console.log(json);

  $('#hello').html(json.hello);
});