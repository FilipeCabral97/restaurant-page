import "./style.css";
import loadWebsite from "./website.js";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContacts from "./contacts";

loadWebsite();

// ---------- EVENT LISTENERS ----------
// const homeLink = document.querySelector(".home-link");
// const menuLink = document.querySelector(".menu-link");
// const contactsLink = document.querySelector(".contacts-link");
// homeLink.addEventListener("click", (e) => {
//   homeLink.classList.add("selected");
// });
// menuLink.addEventListener("click", (e) => console.log(e));
// contactsLink.addEventListener("click", (e) => console.log(e));

document.querySelectorAll(".link-container").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document
      .querySelectorAll(".link-container")
      .forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    if (event.target.innerHTML === "Home") {
      loadHome();
    } else if (event.target.innerHTML === "Menu") {
      loadMenu();
    } else {
      loadContacts();
    }
  })
);
