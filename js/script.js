"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  const navbar = document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", clickButton);
    function clickButton() {
      document.body.classList.toggle("_lock");
      navbar.classList.toggle("navbar-bg");
    }
  }
}
