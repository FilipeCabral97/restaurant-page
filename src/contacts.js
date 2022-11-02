function createContacts() {
  const contacts = document.createElement("div");
  const image = document.createElement("img");
  const textPhoneContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const addressL1 = document.createElement("p");
  const addressL2 = document.createElement("p");
  const phone = document.createElement("p");
  const hoursContainer = document.createElement("div");
  const hoursHeader = document.createElement("p");
  const moSa = document.createElement("p");
  const Su = document.createElement("p");
  const button = document.createElement("button");

  // Image
  image.classList.add("contact-image");
  image.src = "/home/filipe/Odin/repos/restaurant-page/src/images/phone.png";

  // Text
  textContainer.classList.add("contacts-text-container");
  addressL1.innerHTML = "1119 Grove Street";
  addressL2.innerHTML = "Bethpage, NY 11714, USA";
  phone.innerHTML = "631-849-2909";
  textContainer.appendChild(addressL1);
  textContainer.appendChild(addressL2);
  textContainer.appendChild(phone);

  // Hours
  hoursContainer.classList.add("hours-container");
  hoursHeader.classList.add("hours-header");
  hoursHeader.innerHTML = "Opening hours:";
  moSa.innerHTML = "Mo-Sa 11:30 - 23:00";
  Su.innerHTML = "Su 15:00 - 23:00";
  hoursContainer.appendChild(hoursHeader);
  hoursContainer.appendChild(moSa);
  hoursContainer.appendChild(Su);

  // Container
  textPhoneContainer.classList.add("text-phone-container");
  textPhoneContainer.appendChild(textContainer);
  textPhoneContainer.appendChild(hoursContainer);

  // Button
  button.classList.add("reservation");
  button.innerHTML = "Reservation";

  // Append
  contacts.classList.add("container", "contacts-container");
  contacts.appendChild(image);
  contacts.appendChild(textPhoneContainer);
  contacts.appendChild(button);

  return contacts;
}

function loadContacts() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContacts());
}

export default loadContacts;
