document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".section");
    let navLinks = document.querySelectorAll(".nav-link");
  
    sections.forEach((section) => {
      let rect = section.getBoundingClientRect();
  
      if (rect.top <= 100 && rect.bottom >= 100) {
        let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
        
        navLinks.forEach((link) => link.classList.remove("active"));
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });