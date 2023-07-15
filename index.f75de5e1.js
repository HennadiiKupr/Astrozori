const checkbox = document.getElementById("menu-opener");
const menu = document.getElementById("menu");
window.addEventListener("change", ()=>{
    if (checkbox.checked) {
        document.body.classList.add("page__body--with-menu");
        window.location.hash = "#menu";
    } else {
        document.body.classList.remove("page__body--with-menu");
        window.location.hash = "";
    }
});
window.addEventListener("hashchange", ()=>{
    if (window.location.hash === "#menu") menu.classList.add("page__menu--opened");
    else {
        document.body.classList.remove("page__body--with-menu");
        menu.classList.remove("page__menu--opened");
        checkbox.checked = false;
    }
});
window.addEventListener("load", function() {
    if (window.location.hash) window.location.hash = "";
});
document.addEventListener("DOMContentLoaded", function() {
    var selLabel = document.querySelector(".selLabel");
    var dropdown = document.querySelector(".dropdown");
    var dropdownList = document.querySelectorAll(".dropdown-list li");
    var selectedItem = document.querySelector(".selected-item p span");
    selLabel.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });
    dropdownList.forEach(function(item) {
        item.addEventListener("click", function() {
            selLabel.textContent = item.textContent;
            dropdown.classList.remove("active");
            selectedItem.textContent = selLabel.textContent;
        });
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
