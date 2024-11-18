const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");

searchIcon.addEventListener("click", () => {
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    navBar.classList.remove("active");

});

menuIcon.addEventListener("click", () => {
    navBar.classList.add("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");

});


const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");

});
window.onscroll = () => {
    cartItemsContainer.classList.remove("active");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
};


// let sections = document.querySelectorAll('href');
// let navBars = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let href = sec.getAttribute('href');

//         if (top >= offset && top < offset + height) {
//             navBars.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + href + ']').classList.add('active');
//             });

//         };
//     });
// };