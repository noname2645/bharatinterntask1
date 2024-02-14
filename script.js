document.addEventListener('DOMContentLoaded', function () {
    var typed1 = new Typed(".mytext", {
        strings: ["a Web Developer", "an Android Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function showportfoliopage() {
    window.location.href = "portfolio.html";
}

function showaboutpage() {
    window.location.href = "about.html";
}

function showcontactpage() {
    window.location.href = "contact.html";
}

function showaccomppage() {
    window.location.href = "accomp.html";
}

function github() {
    window.open("https://github.com/noname2645", '_blank', 'noopener noreferrer');
}

function linkedin() {
    window.open("https://www.linkedin.com/in/rohit-karmokar-654788257/", '_blank', 'noopener noreferrer');
}
