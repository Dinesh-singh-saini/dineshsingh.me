function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
document.getElementById('main').style.display = 'none';
 window.onload = function() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}
