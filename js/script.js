// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign"); //NEW
const assignedItems = document.querySelector(".assigned-items"); //NEW

// event listenr for addGuessButton
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest); //Tim (e.g)
  if (guest !== "") {
    addToList(guest);
  }
  clearInput("");
  updateGuestCount();
});
//Clear the Input Box
//----------------------------------------------

const clearInput = function () {
  guestInput.value = "";
};

//Refactor Code
//--------------------------------------

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

// Limit the Guest List
//------------------------------------------
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//--------------------NEW 9.5-------------
const assignItems = function () {
  const potluckItems = [
    "Spring Rolls",
    "Pad Thai",
    "Sticky Rice",
    "Tom Yum",
    "Mango Sticky Rice",
    "Pad See Ew",
    "Pad Kra Pao",
    "Green Papaya Salad",
    "Guay Tiew (Noodle Soup",
    "Kluay Tod (Deep-Fried Bananas)",
    "Thai Coconut Ice Cream",
    "Ma Laeng Tod (Fried Insects)"
  ];
  //console.log(potluckItems.length);

  // Select Elements & Loop Through the Array
  //---------------------------------------------
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1); // This allows NO REPEATS in items assigned randomly
  }
};

//Add an Event Listener & Update PotluckItems Array

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true; // STOPS the add dishes button to stop repeating a new list ex list goes on and on wiht not limit when assigning dishes
});
