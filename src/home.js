// ----- MAIN -----
function createText(className, text) {
  const paragraph = document.createElement("p");
  paragraph.classList.add(className);
  paragraph.innerHTML = text;

  return paragraph;
}

function createHome() {
  // card-one
  const cardOneDiv = document.createElement("div");
  cardOneDiv.classList.add("card", "card-one");
  const cardOneIcon = document.createElement("div");
  cardOneIcon.classList.add("icon");
  cardOneDiv.appendChild(cardOneIcon);

  const cardOneText = document.createElement("div");
  cardOneText.classList.add("text");
  cardOneText.appendChild(
    createText("text-header", "The best keto friendly restaurant you can find")
  );
  cardOneText.appendChild(
    createText(
      "text-content",
      "You can enjoy a low-carb full meal, from appetizers to desserts. Even our drinks!"
    )
  );
  cardOneDiv.appendChild(cardOneText);

  // card-two
  const cardTwoDiv = document.createElement("div");
  cardTwoDiv.classList.add("card", "card-two");

  const cardTwoText = document.createElement("div");
  cardTwoText.classList.add("text");
  cardTwoText.appendChild(
    createText("text-header", "We have the freshest products, always!")
  );
  cardTwoText.appendChild(
    createText(
      "text-content",
      "Every day we receive the freshest products, and rest assured that we have protocols that prevent anything from going to waste."
    )
  );
  cardTwoDiv.appendChild(cardTwoText);
  const cardTwoIcon = document.createElement("div");
  cardTwoIcon.classList.add("icon");
  cardTwoDiv.appendChild(cardTwoIcon);

  // card-three
  const cardThreeDiv = document.createElement("div");
  cardThreeDiv.classList.add("card", "card-three");
  const cardThreeIcon = document.createElement("div");
  cardThreeIcon.classList.add("icon");
  cardThreeDiv.appendChild(cardThreeIcon);

  const cardThreeText = document.createElement("div");
  cardThreeText.classList.add("text");
  cardThreeText.appendChild(
    createText("text-header", "A restaurant that cares about the planet")
  );
  cardThreeText.appendChild(
    createText(
      "text-content",
      "We do our best to reduce our carbon footprint, reducing enery and food waste and avoiding plastic. Also our products are all bio!"
    )
  );
  cardThreeDiv.appendChild(cardThreeText);

  const home = document.createElement("div");
  home.classList.add("container", "card-container");
  home.appendChild(cardOneDiv);
  home.appendChild(cardTwoDiv);
  home.appendChild(cardThreeDiv);

  return home;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
