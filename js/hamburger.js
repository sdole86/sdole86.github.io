function hamburgerMenu() {
    // Toggle the side menu
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let menuStyle = getComputedStyle(hamburgerMenu);
  
    if (menuStyle.display == "none") {
      document.getElementById("ham-menu").style.display = "flex";
    } else {
      document.getElementById("ham-menu").style.display = "none";
    }
  
    // Exchange hamburger icon and close icon
    let hamburgerIcon = document.querySelector("#ham-icon");
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.replace("fa-bars", "fa-times-circle");
      return;
    } else {
      hamburgerIcon.classList.replace("fa-times-circle", "fa-bars");
      return;
    }
  }