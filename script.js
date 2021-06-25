
let image = new Image();
image.width = 30;
image.height = 30;
image.src = './assets/rook.svg';
let board = document.createElement("div")
board.classList.add("boardStyle")
let body = document.body;
body.appendChild(board)
let size = +prompt("board size ?")
let possibleMovesArr = []



board.style.width = `${size * 50}px`
board.style.height = `${size * 50}px`
for(let i = 0 ; i < size; i++){
    for(let j = 0; j < size; j++){
         let boardItem = document.createElement("div")
        boardItem.classList.add("boardItemStyle")
         if((i + j) % 2 === 0){
            boardItem.classList.add("boardItemDiffColor")
        }
        boardItem.id = i * size + j;
        
    board.appendChild(boardItem)
    boardItem.addEventListener("click", function(e){
       let currentId = "";
       const boardLength = board.children.length;
       const boardArr = Array.from(board.childNodes)
                if(this.childNodes[0]){
                    if(e.target.nodeName === "IMG"){
                        currentId = e.target.parentNode.id
                    }else{
                        currentId  = e.target.id
                    }
                    possibleMovesArr =  showMove(currentId)
                    console.log(possibleMovesArr)
                   
                }else {
                    if(possibleMovesArr.includes(e.target.id)){
                        let newPossibleRookPosition = document.getElementById(e.target.id)
                        newPossibleRookPosition.appendChild(image)
                        for(let i = 0; i < boardLength; i++){
                            if(boardArr[i].style.backgroundColor === "brown"){
                                boardArr[i].style.backgroundColor = ""
                            }
                        }
                    }
                }
                
        })
 }
}
const showMove = (id) => {
    const possibleMovesArr = [] 
    const boardLength = board.children.length;
    const boardArr = Array.from(board.childNodes)
    for(let i = 0; i < boardLength; i++){
        if(((+boardArr[i].id - Number(id)) % size === 0 || Math.floor(boardArr[i].id / size) === Math.floor(id / size)) && boardArr[i].id !== id){
            boardArr[i].style.backgroundColor = "brown"
            possibleMovesArr.push(boardArr[i].id)
     }
  }
  return possibleMovesArr;
}

const moveRook = (arr) => {
    const boardLength = board.children.length;
    const boardArr = Array.from(board.childNodes)
    console.log(id)
    let newPossibleRookPosition = document.getElementById(id)
    console.log(newPossibleRookPosition)
    newPossibleRookPosition.appendChild(image)
    for(let i = 0; i < boardLength; i++){
        if(boardArr[i].style.backgroundColor === "brown"){
            boardArr[i].style.backgroundColor = ""
        }
    }
}

let rookStartPosition = document.getElementById("0")
rookStartPosition.appendChild(image)