const user_panel = document.querySelector(".amazon_user_panel");
const close_button = document.querySelector(".close_button");
const hamburger = document.querySelector(".hamburger_content_box");

// Initialize sidebar in closed state
if (user_panel) {
    user_panel.style.left = "-380px";
    user_panel.style.transition = "left 0.25s ease";
}

function show_side_bar() {
    if (user_panel) user_panel.style.left = "0";
}

function hide_side_bar() {
    if (user_panel) user_panel.style.left = "-380px";
}

if (hamburger) {
    hamburger.addEventListener("click", show_side_bar);
}

if (close_button) {
    close_button.addEventListener("click", hide_side_bar);
}

// Add click handlers to menu items
document.querySelectorAll(".menu_item").forEach(item => {
    item.addEventListener("click", function() {
        console.log("Clicked:", this.textContent.trim());
    });
});