let menuOpen = false;
const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");

window.onload = () => {
  document.getElementById("mobileNavMenuButton").addEventListener("click", () => {
    if(menuOpen) {
      mobileMenuDrawer.style.display = "none";
    } else {
      mobileMenuDrawer.style.display = "flex";
    }

    menuOpen = !menuOpen;
   
  });
}