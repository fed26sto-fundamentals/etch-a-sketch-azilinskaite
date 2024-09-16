let color = "black";

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
    div.addEventListener("mouseover", colorDiv);
    container.insertAdjacentElement("beforeend", div);
  }
};

function getSize() {
  let input = prompt("What grid size do you choose? (Please enter a number between 1 and 100)")
  return input;
};

