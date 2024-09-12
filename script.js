function addDiv() {
    // create a new div element
    const newDiv = document.createElement("div");
    // add class to div element
    newDiv.classList.add("item");
    // add new div inside container
    document.getElementById("container").appendChild(newDiv);
  }

  addDiv();

for(let step = 0; step < 255; step++) {
    addDiv();
}

