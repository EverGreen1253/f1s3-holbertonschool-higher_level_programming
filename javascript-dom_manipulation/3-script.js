let toggle_header = document.getElementById("toggle_header");
let header = document.querySelector("header");

toggle_header.onclick = toggleHeaderElemClass;

function toggleHeaderElemClass() {
    header.classList.toggle("red");
    header.classList.toggle("green");

    /*
    if (header.classList.contains("red")) {
        header.classList.remove("red");
        header.classList.add("green");
    } else {
        header.classList.remove("green");
        header.classList.add("red");
    }
    */
}