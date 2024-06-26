let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');

let turnO = true; //playerX playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("Box clicked!");
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
            box.disabled = true;
        }else{
            box.innerHTML = "X";
            turnO = true;
            box.disabled = true; 
        }
        checkWinner();
    })
})

function checkWinner(){
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if((pos1Val === pos2Val) && (pos2Val === pos3Val)){
                msgContainer.classList.remove('hide');
                msg.textContent = `Congratulations! Player ${pos1Val} is the Winner!`;
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
            } 
        }
    }
}

newBtn.addEventListener("click", () => {
    msgContainer.classList.add('hide');
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
    })
})

resetBtn.addEventListener("click", () => {
    msgContainer.classList.add('hide');
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
    })
})