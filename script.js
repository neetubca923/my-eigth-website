/* LOADER */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1200);
});


/* NAVBAR */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 60){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});


/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("mobile-open");

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".navbar nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
  });

});


/* IMAGE LIGHTBOX */

const photos = document.querySelectorAll(".photo img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeLightbox = document.querySelector(".close-lightbox");

photos.forEach(photo => {

  photo.addEventListener("click", () => {

    lightboxImg.src = photo.src;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

  });

});


closeLightbox.addEventListener("click", closeGallery);

lightbox.addEventListener("click", (event) => {

  if(event.target === lightbox){
    closeGallery();
  }

});


function closeGallery(){

  lightbox.classList.remove("show");

  document.body.style.overflow = "";

}


/* ESC KEY */

document.addEventListener("keydown", (event) => {

  if(event.key === "Escape"){
    closeGallery();
  }

});


/* PARALLAX */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  const y = window.scrollY;

  if(y < window.innerHeight){

    heroImage.style.transform =
      `scale(1.02) translateY(${y * 0.12}px)`;

  }

});


/* ACTIVE CHAPTER */

const sections = document.querySelectorAll(
  ".hero, .intro, .campus, .training, .mountain-story"
);

const chapterNumbers = document.querySelectorAll(
  ".chapter-nav span"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        let index = [...sections].indexOf(entry.target);

        chapterNumbers.forEach(item =>
          item.classList.remove("active")
        );

        if(chapterNumbers[index]){
          chapterNumbers[index].classList.add("active");
        }

      }

    });

  },
  {
    threshold:.4
  }
);

sections.forEach(section => observer.observe(section));


/* SMOOTH IMAGE REVEAL */

const revealImages = document.querySelectorAll(
  ".campus-card img, .experience-image img, .nature-images img, .photo img"
);

const imageObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "scale(1)";

      }

    });

  },
  {
    threshold:.15
  }
);

revealImages.forEach(img => {

  img.style.opacity = "0";
  img.style.transform = "scale(1.05)";
  img.style.transition =
    "opacity 1s ease, transform 1.2s ease";

  imageObserver.observe(img);

});
