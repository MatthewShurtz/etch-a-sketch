// Selectors
const bigSq = document.querySelector(".big-sq");
const smallSq = document.querySelector(".small-sq");
const colorFill = document.querySelector(".colors");
const clearBtn = document.querySelector(".clear-btn");
const sketchField = document.querySelector(".sketch-field")
let gridBoxes = document.querySelector(".grid-box");

// Grid Sizes
const defaultGrid = 30;
const bigGrid = 16;
const smallGrid = 64;

// Grid Field Construction
setGridField = () => {
    sketchField.style.gridTemplateColumns = `repeat(${defaultGrid}, 1fr)`;
    sketchField.style.gridTemplateRows = `repeat(${defaultGrid}, 1fr)`;
}

gridFieldLayout = () => {
    for (i = 0; i < defaultGrid * defaultGrid; i++) {
        let newGridBoxes = document.createElement("div");
        newGridBoxes.className = "grid-box";
        sketchField.appendChild(newGridBoxes);
        newGridBoxes.addEventListener("mouseover", changeBlack = () => {
            newGridBoxes.style.backgroundColor = "black";
        })
    }
}

createGridField = () => {
    setGridField();
    gridFieldLayout();
}

createGridField();

// Listeners
bigSq.addEventListener("click", () => {
    alert("I work!")
})
smallSq.addEventListener("click", () => {
    alert("I work!")
})
colorFill.addEventListener("click", () => {
    alert("I work!")
})
clearBtn.addEventListener("click", () => {
    alert("I work!")
})