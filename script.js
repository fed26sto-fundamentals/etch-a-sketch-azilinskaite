// create divs inside the container

function addDiv() {
  // create a new div element
  const newDiv = document.createElement("div");
  // add class to div element
  newDiv.classList.add("item");
  // add new div inside container
  document.getElementById("container").appendChild(newDiv);
  // add event listener to each div
  newDiv.addEventListener("mouseover", mouseOver);
}

addDiv();

for (let step = 0; step < 255; step++) {
  addDiv();
}

// add hover effect

function mouseOver() {
  this.style.backgroundColor = "black";
};

mouseOver();

// promt to choose grid size -- NOT WORKING!

const button = document.querySelector("button");

button.addEventListener('click', function() {
  const userInput = prompt("How many cells do you need?");
  console.log(userInput);
});

// adjust grid in javascript
