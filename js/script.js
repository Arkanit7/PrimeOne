// Initialize and add the map
function initMap() {
    // The location of PrimeOne
    var primeOne = { lat: 40.742838, lng: -73.926137 };
    // The map, centered at primeOne
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: primeOne });
    // The marker, positioned at primeOne
    var marker = new google.maps.Marker({ position: primeOne, map: map });
}

const body = document.getElementsByTagName("body")[0];
const burger = document.getElementsByClassName("header-menu__icon")[0];
const menu = document.getElementsByClassName("header-menu")[0];
const langPlace = document.getElementsByClassName("header__top")[0];
const navsPlace = document.getElementsByClassName("header__bottom")[0];
const before = document.getElementsByClassName("header__order")[0];

/*
function switcher() {
    console.log(window.innerWidth);
    let lang = document.getElementsByClassName("header__lang")[0];
    let navs = document.getElementsByClassName("header__nav-bar");
    if (window.innerWidth <= 768) {
        if (menu.className != "header-menu done") {
            menu.appendChild(lang);
            menu.appendChild(navs[1]);
            menu.appendChild(navs[0]);
            menu.classList.toggle("done");
            console.log("OK");
        }
    }
    else if (window.innerWidth > 768 && menu.className == "header-menu done") {
        langPlace.insertBefore(lang, before);
        navsPlace.appendChild(navs[1]);
        navsPlace.appendChild(navs[0]);
        menu.classList.toggle("done");
    }
}
window.onresize = switcher;
*/

burger.onclick = function() {
    body.classList.toggle("lock");
    menu.classList.toggle("show-menu");
    burger.classList.toggle("animation")
}