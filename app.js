const loadingBarItemEl = document.querySelector(".loading-bar__item");

let width = 1;
let loadingBar = setInterval(function() {
    if (width >= 100) {
        clearInterval(loadingBar);
    } else {
        width++;
        loadingBarItemEl.style.width = width + "%";
    }
}, 15)

// TODO: 30%, 60%, 100%
