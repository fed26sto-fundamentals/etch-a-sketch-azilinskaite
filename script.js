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

for (let step = 0; step < 256; step++) {
  addDiv();
}

// add hover effect

function mouseOver() {
  this.style.backgroundColor = "black";
};

// promt to choose grid size

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  let size = prompt("How many cells do you need? (Enter a number between 1-100)");
  size = parseInt(size);
  
  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}
);

//change grid - NOT WORKING

function createGrid () {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

//starting grid
createGrid(16);