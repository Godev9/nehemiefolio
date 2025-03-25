// JavaScript interactions will go here later
// <!-- Add Swiper JS -->

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Get elements
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

// Close menu when a link is clicked
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
  });
});

// Scroll to top function
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top when clicking the logo
  document.getElementById("logo").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll to top when clicking "Home" link
  document.querySelectorAll("a[href='#home']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-up, .fade-down");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // observer.unobserve(entry.target);
          // Stops observing once animated
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.3,
  };

  const slideInElements = document.querySelectorAll(
    "#services-heading, #services-desc, #wave-path"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(
          "opacity-0",
          "-translate-x-10",
          "translate-x-10"
        );
        entry.target.classList.add("opacity-100", "translate-x-0");
      }
    });
  }, observerOptions);

  slideInElements.forEach((el) => observer.observe(el));
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Start animation when 10% of the section is visible
};

const elementsToObserve = document.querySelectorAll("#about-me, #about-svg");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove initial hidden styles and add animation effect
      entry.target.classList.remove("opacity-0", "translate-x-[-100%]");
      entry.target.classList.add("opacity-100", "translate-x-0");

      // Stop observing after first animation trigger
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe all targeted elements
elementsToObserve.forEach((element) => observer.observe(element));

// Intersection Observer for staggered animation
const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Trigger as soon as 10% of the element is visible
};

const paragraphs = document.querySelectorAll(".container p");

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Apply staggered animation using setTimeout
      setTimeout(() => {
        entry.target.classList.remove("opacity-0", "translate-x-[-100%]");
        entry.target.classList.add("opacity-100", "translate-x-0");
      }, index * 200); // Each line appears 200ms after the previous one

      // Stop observing after animation runs
      observers.unobserve(entry.target);
    }
  });
}, option);

// Observe all paragraphs
paragraphs.forEach((paragraph) => observers.observe(paragraph));

const particleField = document.getElementById("particleField");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
  particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
  particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particleField.appendChild(particle);
}

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  function handleScroll() {
    let viewportHeight = window.innerHeight;

    animatedElements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let progress = (viewportHeight - elementTop) / viewportHeight;

      if (elementTop < viewportHeight) {
        element.style.opacity = Math.min(1, progress);

        let animationType = element.dataset.animate;
        switch (animationType) {
          case "fade-up":
            element.style.transform = `translateY(${(1 - progress) * 50}px)`;
            break;
          case "fade-down":
            element.style.transform = `translateY(${(1 - progress) * -50}px)`;
            break;
          case "fade-left":
            element.style.transform = `translateX(${(1 - progress) * -50}px)`;
            break;
          case "fade-right":
            element.style.transform = `translateX(${(1 - progress) * 50}px)`;
            break;
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
