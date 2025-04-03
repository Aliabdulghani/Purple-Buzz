let links = document.querySelector("header .div-navbar");
document.querySelector("header .header-icon").onclick = function () {
    if (links.style.display == 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
};