document.addEventListener("DOMContentLoaded", function () {
    let offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 700;
    
    const backToTopButton = document.querySelector(".go-top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > offset) {
        backToTopButton.classList.add("go-top-visible");
      } else {
        backToTopButton.classList.remove("go-top-visible", "go-top-fade-out");
      }
  
      if (window.scrollY > offset_opacity) {
        backToTopButton.classList.add("go-top-fade-out");
      }
    });
  
    backToTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  