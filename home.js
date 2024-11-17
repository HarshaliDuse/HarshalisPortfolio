document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    function addActiveClass() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the current scroll position is within the section bounds
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                removeActiveClasses();

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Call addActiveClass on scroll
    window.addEventListener('scroll', addActiveClass);

    // Ensure the active class is also set on page load
    addActiveClass();
});

document.addEventListener("DOMContentLoaded", () => {
    const workSection = document.querySelector(".work"); // Select the Work section
    const cards = document.querySelectorAll(".card"); // Select all cards in the section
    
    const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the Work section is in view
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("active");
                    }, index * 200); // Stagger animations with delay
                });
            } else {
                // Optionally remove 'active' class when not in view
                cards.forEach(card => card.classList.remove("active"));
            }
        });
    }, observerOptions);

    observer.observe(workSection); // Start observing the Work section
});



document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about");
    const secondStadium = aboutSection.querySelector(".second-stadium");
    const thirdStadium = aboutSection.querySelector(".third-stadium");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the about section is visible
            secondStadium.style.display = "block"; // Make visible
            thirdStadium.style.display = "block"; // Make visible
            secondStadium.style.animation = "popOut 1.2s ease-out forwards"; // Trigger animation
            thirdStadium.style.animation = "popOut 1.2s ease-out forwards"; // Trigger animation
          } else {
            // When the about section is not visible
            secondStadium.style.display = "none"; // Hide
            thirdStadium.style.display = "none"; // Hide
          }
        });
      },
      {
        root: null, // Observe the entire viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
  
    observer.observe(aboutSection);
  });
  
  