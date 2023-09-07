let add_item = document.getElementById("add_item");
let my_list = document.querySelector("ul.my_list");

add_item.onclick = addNewListItem;

function addNewListItem() {
    let new_item = document.createElement("li");
    new_item.textContent = "Item";

    my_list.appendChild(new_item);
}