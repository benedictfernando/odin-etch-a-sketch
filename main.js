
let container = document.getElementById('container');
let button = document.getElementById('clearNew');


function buildCanvas(size) 
{
  // build height of container
  for (let j = 0; j < size; j++) {
  
    // create horizontal rows
    let flexBox = document.createElement('div');
    flexBox.classList.add('flex-box');
    container.appendChild(flexBox);
    
    // produce individual cells
    for (let i = 0; i < size; i++) {
      let flexItem = document.createElement('div');
      flexItem.classList.add('flex-item')
      flexBox.appendChild(flexItem);
    }
  }

  // change background of a cell on hover
  document.querySelectorAll('.flex-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = "red";
    })
  });
}


// initialize canvas with 16 * 16 canvas
buildCanvas(16);


// removes all child nodes of a parent node
function removeChild(node)
{
  while (node.lastElementChild) node.removeChild(node.lastElementChild);
}


function clearNew()
{
  let size = parseInt(prompt(
    "Enter new size: \n(Note: Input values between 1 to 64 inclusively.)"
  ));

  while (!size || size < 1 || size > 64) {
    size = parseInt(prompt(
      "Invalid input! \nPlease enter values inclusive of 1 & 64 only."
    ));
  }

  removeChild(container);
  buildCanvas(size);
}


// execute clearNew when button is clicked
button.addEventListener('click', clearNew);
