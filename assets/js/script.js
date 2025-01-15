const backToTopButton = document.querySelector("#footer-nav ul li a");

backToTopButton.addEventListener("click", (item) => {
    item.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
