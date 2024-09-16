// // create divs inside the container

// function addDiv() {
//   // create a new div element
//   const newDiv = document.createElement("div");
//   // add class to div element
//   newDiv.classList.add("item");
//   // add new div inside container
//   document.getElementById("container").appendChild(newDiv);
//   // add event listener to each div
//   newDiv.addEventListener("mouseover", mouseOver);
// }

// for (let step = 0; step < 256; step++) {
//   addDiv();
// }

// // add hover effect

// function mouseOver() {
//   this.style.backgroundColor = "black";
// };

// // promt to choose grid size

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function() {
//   let size = prompt("How many cells do you need? (Enter a number between 1-100)");
//   size = parseInt(size);
  
//   if (size && size > 0 && size <= 100) {
//     createGrid(size);
//   } else {
//     alert("Please enter a valid number between 1 and 100.");
//   }
// }
// );

// //change grid - NOT WORKING

// function createGrid () {
//     const container = document.querySelector("#container");
//     container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
// }

// //starting grid
// createGrid(16);

document.addEventListener("DOMContentLoaded", function() {
  createContainer(16);

  let btnPopUp = document.querySelector("#btn");
  btnPopUp.addEventListener("click", function(){
    let size = getSize();
    createContainer(size)
  })
});

function createContainer(size){
  let container = document.querySelector("#container");

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divsAmount = size * size;

  for(let i=0; i < divsAmount; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", function(){
      div.style.backgroundColor = "black";
    });
    container.insertAdjacentElement("beforeend", div);
  }
};

function getSize() {
  let input = prompt("What grid size do you choose? (Please enter a number between 1 and 100)")
  return input;
};