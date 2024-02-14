document.addEventListener('DOMContentLoaded', function () {
    var typed1 = new Typed(".mytext", {
        strings: ["a Web Developer", "an Android Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    var typed2 = new Typed(".about", {
        strings: ["10th in 2020", "12th in 2022"],
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
    // If you are already on the "about" page, you might not want to redirect to the same page.
    // You can add some additional logic here based on your requirements.
    console.log("Already on the About page");
}

function showcontactpage() {
    window.location.href = "contact.html";
}

function showaccomppage() {
    window.location.href = "accomp.html";
}
