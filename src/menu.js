function createMenu() {
  // DISH ONE
  const dishOne = document.createElement("div");
  const dishOneName = document.createElement("p");
  const dishOneText = document.createElement("p");

  dishOne.classList.add("dish-one", "dish");
  dishOneName.classList.add("dish-name");
  dishOneText.classList.add("dish-text");

  dishOneName.innerHTML = "Smashed Brussels Sprouts";
  dishOneText.innerHTML =
    "Brussels sprouts, mozzarella, parmesan, garlic, thyme, parsley";

  dishOne.appendChild(dishOneName);
  dishOne.appendChild(dishOneText);

  // DISH TWO
  const dishTwo = document.createElement("div");
  const dishTwoName = document.createElement("p");
  const dishTwoText = document.createElement("p");

  dishTwo.classList.add("dish-two", "dish");
  dishTwoName.classList.add("dish-name");
  dishTwoText.classList.add("dish-text");

  dishTwoName.innerHTML = "Bacon-Wrapped Jalapeño Poppers";
  dishTwoText.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis nesciunt ea officia repellendus ratione!";

  dishTwo.appendChild(dishTwoName);
  dishTwo.appendChild(dishTwoText);

  // DISH THREE
  const dishThree = document.createElement("div");
  const dishThreeName = document.createElement("p");
  const dishThreeText = document.createElement("p");

  dishThree.classList.add("dish-three", "dish");
  dishThreeName.classList.add("dish-name");
  dishThreeText.classList.add("dish-text");

  dishThreeName.innerHTML = "Cedar Plank Salmon";
  dishThreeText.innerHTML =
    "Nunc id enim id arcu ultricies semper. Donec rutrum.";

  dishThree.appendChild(dishThreeName);
  dishThree.appendChild(dishThreeText);

  // DISH FOUR
  const dishFour = document.createElement("div");
  const dishFourName = document.createElement("p");
  const dishFourText = document.createElement("p");

  dishFour.classList.add("dish-four", "dish");
  dishFourName.classList.add("dish-name");
  dishFourText.classList.add("dish-text");

  dishFourName.innerHTML = "Buffalo Shrimp Lettuce Wraps";
  dishFourText.innerHTML =
    "Morbi dapibus condimentum orci, id maximus turpis. In at molestie tellus, sed congue.";

  dishFour.appendChild(dishFourName);
  dishFour.appendChild(dishFourText);

  // DISH FIVE
  const dishFive = document.createElement("div");
  const dishFiveName = document.createElement("p");
  const dishFiveText = document.createElement("p");loadMenu

  dishFive.classList.add("dish-five", "dish");
  dishFiveName.classList.add("dish-name");
  dishFiveText.classList.add("dish-text");

  dishFiveName.innerHTML = "Meatballs and Sauce";
  dishFiveText.innerHTML =
    "Morbi dapibus condimentum orci, id maximus turpis. In at molestie tellus, sed congue.";

  dishFive.appendChild(dishFiveName);
  dishFive.appendChild(dishFiveText);

  // DISH SIX
  const dishSix = document.createElement("div");
  const dishSixName = document.createElement("p");
  const dishSixText = document.createElement("p");

  dishSix.classList.add("dish-six", "dish");
  dishSixName.classList.add("dish-name");
  dishSixText.classList.add("dish-text");

  dishSixName.innerHTML = "Pad See Ew";
  dishSixText.innerHTML =
    "Donec ut urna quis nunc dignissim aliquet. Sed ultrices orci nec nisl.";

  dishSix.appendChild(dishSixName);
  dishSix.appendChild(dishSixText);

  // DISH SEVEN
  const dishSeven = document.createElement("div");
  const dishSevenName = document.createElement("p");
  const dishSevenText = document.createElement("p");

  dishSeven.classList.add("dish-seven", "dish");
  dishSevenName.classList.add("dish-name");
  dishSevenText.classList.add("dish-text");

  dishSevenName.innerHTML = "Baked Corn Casserole";
  dishSevenText.innerHTML =
    "Curabitur facilisis nulla nec enim aliquam aliquet. Suspendisse.";

  dishSeven.appendChild(dishSevenName);
  dishSeven.appendChild(dishSevenText);

  // APPEND

  const menu = document.createElement("div");
  menu.classList.add("container", "menu-container");

  menu.appendChild(dishOne);
  menu.appendChild(dishTwo);
  menu.appendChild(dishThree);
  menu.appendChild(dishFour);
  menu.appendChild(dishFive);
  menu.appendChild(dishSix);
  menu.appendChild(dishSeven);

  return menu;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
