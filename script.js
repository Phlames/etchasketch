const grid = document.querySelector('#grid');
const blackColor = document.querySelector('#black-color');
const whiteColor = document.querySelector('#white-color');
const rainbowColor = document.querySelector('#rainbow-color');
const buttons = document.querySelectorAll('.color-button');

//create clear button to reset board
const clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearAll);

function clearAll() {
    const newGrid = document.querySelectorAll('.old-grid');

    newGrid.forEach(newGridCell => {
        for (i=0; i < newGrid.length; i++) {
        newGridCell.style.backgroundColor = 'white'; 
    }})
};

// default black color on
 blackColor.classList.add('active')

// if selecting another color, removes the "active" class on all other buttons and then adds to targeted color
buttons.forEach(button => {
    button.addEventListener('click', (e) => { 
        for (i=0; i < buttons.length; i++) {
            buttons[i].classList.remove('active')
        }
        e.target.classList.add('active');
    });
});

//grid creation function
function createGrid(number) {
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    //create each individual div for the whole grid
    for (i = 0; i < number * number; i++) {
        const gridCell = document.createElement('div');
        gridCell.addEventListener('mouseover', changeGridCell);
        grid.appendChild(gridCell);
        gridCell.style.border = `1px dotted black`;
        gridCell.classList.add('old-grid');
    }
}

//auto set grid at 16
createGrid(16); 

// change colour function for individual divs
function changeGridCell(e) {
    let changedGridCell = e.target;
    changedGridCell.style.backgroundColor = pickColor(); 
}

// create function for setting default color to black, and any other colors afterwards

function pickColor() {
    if (whiteColor.classList.contains('active')) {
        return 'white';
    }
    else if (rainbowColor.classList.contains('active')) {
        let randomRed = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        return '#' + randomRed + randomGreen + randomBlue;
    }
    else return 'black';
}

function addClass() {
    let changedClass = e.target;
    changedClass.target.classList.toggle('active');
}


/* grid algorithm

INPUT: a number from a scroll bar

OUTPUT: creates a grid that is n squares wide and n squares long

recolor algorithm
when mouse is hovered over a div, the div's background color is changed by changing the background
*/
