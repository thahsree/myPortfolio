const sections = document.querySelectorAll("section[id]");
const button = document.getElementById('ham_button');

// function scrollTracker() {
//   const currentYScroll = window.scrollY;

//   sections.forEach((section) => {
//     const sectionHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 100; // Adjust for header height if needed
//     const id = section.getAttribute("id");
//     const currentNavLink = document.querySelector(`nav a[href*="#${id}"]`);
//     if (
//       currentYScroll > sectionTop &&
//       currentYScroll <= sectionTop + sectionHeight
//     ) {
//       currentNavLink.classList.add("active");
//     } else {
//       currentNavLink.classList.remove("active");
//     }
//   });
// }

document.querySelector('.menu-button').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('menu-active');
});


// window.addEventListener("scroll", scrollTracker);
