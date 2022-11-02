import loadHome from "./home";

// ----- NAV -----
function createNav() {
  // Links
  // home
  const homeDiv = document.createElement("div");
  const homeLink = document.createElement("a");
  homeDiv.classList.add("link-container", "active");
  homeLink.classList.add("home-link");
  homeLink.innerHTML = "Home";
  homeLink.href = "#";
  homeDiv.appendChild(homeLink);

  // menu
  const menuDiv = document.createElement("div");
  const menuLink = document.createElement("a");
  menuDiv.classList.add("link-container");
  menuLink.classList.add("menu-link");
  menuLink.innerHTML = "Menu";
  menuLink.href = "#";
  menuDiv.appendChild(menuLink);

  // contacts
  const contactsDiv = document.createElement("div");
  const contactsLink = document.createElement("a");
  contactsDiv.classList.add("link-container");
  contactsLink.classList.add("contacts-link");
  contactsLink.innerHTML = "Contacts";
  contactsLink.href = "#";
  contactsDiv.appendChild(contactsLink);

  // Append on nav
  const nav = document.createElement("nav");
  const navDiv = document.createElement("div");
  navDiv.classList.add("container", "nav-container");
  navDiv.appendChild(homeDiv);
  navDiv.appendChild(menuDiv);
  navDiv.appendChild(contactsDiv);
  nav.appendChild(navDiv);

  return nav;
}

// ----- MAIN -----
function createMain() {
  const main = document.createElement("main");
  return main;
}

// ----- FOOTER -----
function createFooter() {
  const footer = document.createElement("footer");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Copyright © 2022 FilipeCabral97";
  footer.appendChild(paragraph);

  return footer;
}

// ----------- Export -----------

function loadWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
}

export default loadWebsite;
