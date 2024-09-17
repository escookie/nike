
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
});

