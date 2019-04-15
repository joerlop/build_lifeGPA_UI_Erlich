const title = document.querySelector(".header-left-content h1");

const timeTitle = 500;

window.addEventListener("load", event => {
    if(mobile.matches) {
        title.classList.replace("hide-header", "show-navigation");
    } else {
        setTimeout(() => title.classList.replace("hide-header", "fade-in-top"), timeTitle)   
    }
})
