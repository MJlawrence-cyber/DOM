const displayInput = document.getElementById("displayPass");
const myNumbers = document.getElementsByClassName("myButton");
const deleteBtn = document.getElementById("delete");
const enterBtn = document.getElementById("confirmPassword");
const myPasscode = [];

//set correct passcode
const correctPasscode = 1234;
const passcodeLimit = 4;

//display passcode
let displayMyPasscode = (mode) => {
  let stringPasscode;
  //check if mode is to add new number or remove new number to display
  if (mode == "input") {
    stringPasscode = myPasscode.join("");
  } else {
    myPasscode.pop();
    stringPasscode = myPasscode.join("");
  }
  //collect the value from my passcode array
  displayInput.innerText = stringPasscode;
};

// Add an event listener to my numbers botton
//loop through my numbers buttons beffore adding event listener
//creating the for loop

for (let i = 0; i < myNumbers.length; i++) {
  //Add an event listener to each of the buttons
  myNumbers[i].addEventListener("click", function () {
    //check if entered passcode isnt more than the limit
    if (myPasscode.length < passcodeLimit) {
      //collecting the number clicked on
      let myInputNumber = myNumbers[i].textContent;

      //add the numberto the passcode array
      myPasscode.push(myInputNumber);
      //update the passcode screen
      displayMyPasscode("input");
    }
  });
}

//delete function
deleteBtn.addEventListener("click", function () {
    //
  myPasscode.length != 0 ? displayMyPasscode("delete") : "";
});

//Enter function
//Add an event listener to each of the buttons
enterBtn.addEventListener("click", function () {
  //check if the passcode is equal to lenght
  myPasscode.length < 4
    ? alert("incomplete passcode")
    : parseInt(myPasscode.join("")) !== correctPasscode
    ? alert("passcode mismatch")
    : alert("Login Sucessfull");
});
