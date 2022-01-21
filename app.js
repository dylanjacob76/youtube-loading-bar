const loadingBarItemEl = document.querySelector(".loading-bar__item");
const percentageButtonsEl = document.getElementsByClassName("percentage__buttons");

let width = 1;
// let loadingBar = setInterval(function() {
//     if (width >= 100) {
//         clearInterval(loadingBar);
//     } else {
//         width++;
//         loadingBarItemEl.style.width = width + "%";
//     }
// }, 15);

function buttonPress() {
    for (let item of percentageButtonsEl) {
        let buttonThrityEl = item.firstElementChild;
        buttonThrityEl.addEventListener("click", function() {
            let thirtyLoadingBar = setInterval(function() {
                // window.location.reload();
                if (width >= 30) {
                    clearInterval(thirtyLoadingBar);
                } else {
                    width++;
                    loadingBarItemEl.style.width = width + "%";
                }
            }, 15);
        });
        let buttonSixtyEl= buttonThrityEl.nextElementSibling;
        buttonSixtyEl.addEventListener("click", function() {
            let sixtyLoadingBar = setInterval(function() {
                // window.location.reload();
                if (width >= 60) {
                    clearInterval(sixtyLoadingBar);
                } else {
                    width++;
                    loadingBarItemEl.style.width = width + "%"
                }
            },15 );
        });
        let buttonOneHundredEl = buttonSixtyEl.nextElementSibling;
        buttonOneHundredEl.addEventListener("click", function() {
            let oneHundredLoadingBar = setInterval(function() {
                // window.location.reload();
                if (width >= 100) {
                    clearInterval(oneHundredLoadingBar);
                    window.location.reload();
                } else {
                    width++;
                    loadingBarItemEl.style.width = width + "%"
                }
            }, 15)
        })
    }
}



buttonPress();

// TODO: figure out a way to condense the repeated code