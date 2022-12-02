let menuButton = document.querySelector("#menu-button");
let menuItems = document.querySelector("#nav-container");

console.log(window.innerWidth)
menuButton.addEventListener("click", (event) => {
    if (window.innerHeight){}

  if (menuItems.style.display === "") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "";
  }
});


