document.getElementById("play-btn").addEventListener("click", startGame)


function startGame() {

  

    const gridElem = document.querySelector(".grid");
    const introText = document.querySelector("h2");
        
    gridElem.innerHTML = ""; 

    introText.classList.add("hidden");
    gridElem.classList.remove("hidden");


    const level = parseInt(document.querySelector("select").value);
    let cellsNumber
    switch (level) {
    case 1:
        cellsNumber = 100;
        break;
    case 2:
        cellsNumber = 81;
        break;
    case 3:
        cellsNumber = 49;
        break
   
    default:
        cellsNumber = 100;
        break;
   }
    
    for (let i = 1; i <= cellsNumber; i++) {

        const newElem = createGridElem(i, Math.sqrt(cellsNumber))
        newElem.addEventListener("click", handleCellClick)
        gridElem.append(newElem)
    }

    const bombs = generateBombs(cellsNumber)
    function handleCellClick(){
        this.classList.add("clicked")
        const clickedNumber = parseInt(this.textContent);
        if(bombs.includes(clickedNumber)){
            console.log("bomba");
        }
    }

}

// FUNCTIONS


function createGridElem(content, cellSize) {
    const gridElem = document.createElement ("div");
    gridElem.style.width = `calc(100% / ${cellSize})`
    gridElem.style.height = `calc(100% / ${cellSize})`
    gridElem.classList.add("grid-item")
    gridElem.innerHTML = `<span>${content}</span>`
    return gridElem
}


function handleCellClick() {
    this.classList.add("clicked")
    const clickedNumber = parseInt(this.querySelector("span"))
    
}

function generateBombs(maxNumber, numbersQuantity) {
    const numbers = []
    while (numbers.length < numbersQuantity) {
        const rndNumber = getRndInteger (1, maxNumber);
        if (!numbers.includes(rndNumber)) {
            numbers.push(rndNumber)
        }
    }
    return numbers
}

function getRndInteger() {
    return Math.floor(Math.random() * (max - min +1)) + min;
}



