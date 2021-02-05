// Selectors
const bigSqBtn = document.querySelector(".big-sq");
const smallSqBtn = document.querySelector(".small-sq");
const colorFill = document.querySelector(".colors");
const clearBtn = document.querySelector(".clear-btn");
const sketchField = document.querySelector(".sketch-field")
let gridBoxes = document.querySelector(".grid-box");

// Grid Size
let bigSq = 15;
let smallSq = 80;

// Grid Field Construction
gridField = (num) => {
    sketchField.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    sketchField.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

gridSketch = (num) => {
    for (i = 0; i < num * num; i++) {
        let newGridBoxes = document.createElement("div");
        newGridBoxes.className = "grid-box";
        sketchField.appendChild(newGridBoxes);
        newGridBoxes.addEventListener("mouseover", changeBlack = () => {
            newGridBoxes.style.backgroundColor = "black";
        })
    }
}

   

setRainbowColors = () => {
    let colorGrid = document.querySelectorAll(".grid-box");
    if (sketchField.hasChildNodes()) {
        colorGrid.forEach(color = (grid) => {
            grid.addEventListener("mouseover", () => {
            let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
            randomColor = colors[Math.floor(Math.random() * colors.length)];
            grid.style.backgroundColor = randomColor;
            })
        });
    }
}

clearField = () => {
    while (sketchField.hasChildNodes()) {
        sketchField.removeChild(sketchField.firstChild);
    }
}


// Listeners
// changes size of squares
bigSqBtn.addEventListener("click", () => {
        clearField();
        gridField(bigSq);
        gridSketch(bigSq);
});

smallSqBtn.addEventListener("click", () => {
        clearField();
        gridField(smallSq);
        gridSketch(smallSq);
});
// creates random colors. Button will go through crazy colors as well.
colorFill.addEventListener("click", () => {
    setRainbowColors();
})
// clears field and resets grid
clearBtn.addEventListener("click", () => {
    clearField();
})

