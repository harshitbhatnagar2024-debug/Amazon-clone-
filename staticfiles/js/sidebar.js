const sign_in_box = document.querySelector(".Sign_in_box");
const close_button = document.querySelector(".close_button");
const hamburger = document.querySelector(".hamburger_content_box");

function show_side_bar() {
    if (sign_in_box) sign_in_box.style.left = "0";
    if (close_button) close_button.style.left = "330px";
}

function hide_side_bar() {
    if (sign_in_box) sign_in_box.style.left = "-380px";
    if (close_button) close_button.style.left = "-56px";
}

if (hamburger) {
    hamburger.addEventListener("click", show_side_bar);
}