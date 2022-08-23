const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
// winning combination
const WINING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');

let circleTurn;

startGame();

// start game
function startGame(){
  circleTurn = false;
  // it will be called when click any item cell
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleCell, /* only once click*/ {once:true});
  });
  setBoardHover();
}


// this function will call for every cell
function handleCell(e){
  // target all cell div
     const cell = e.target;
     // first x class will add on cell one
     const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
     placeMark(cell, currentClass);
     if(checkWin(/* I am sending x class to checkWin function */ currentClass)){
      alert('you have click me')
     }
    // Check For Win
    // Check For Draw
    // Switch Turns
   // swapTurn
   swapTurn();
   // hover start 
   setBoardHover(cell);



}
 
// placeman function
function placeMark(cell, currentClass){
  // adding class 
  cell.classList.add(currentClass);

}

// swap turn
function swapTurn(){
  // change the circle turn value
  circleTurn = !circleTurn
}

// hover start
function setBoardHover(){
  // remove x and circle class for first time
   board.classList.remove(X_CLASS);
   board.classList.remove(CIRCLE_CLASS);
   if(circleTurn){
    board.classList.add(CIRCLE_CLASS)
   }else{
    board.classList.add(X_CLASS);
   }
}


function checkWin(currentClass){
  return WINING_COMBINATIONS.some(combination => {
    // I am getting every nested array of winning combination array
    return combination.every(index => {
     const storedValue = cellElements[index].classList.contains(currentClass);
     console.log(storedValue)

    })
  })
};

// const xxx = [
//   [12, 23],
//   [44, 55],
//   [133, 100]
// ]


// const zzz = xxx.some(individualArrayList => {
  
//    individualArrayList.every((number, index, array) => {
//       console.log(number);
//    });


console.log(cellElements)





// })