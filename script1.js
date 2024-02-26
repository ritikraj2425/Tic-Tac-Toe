// let btn = document.querySelector("#button-java");
// let mode = "light";

// btn.addEventListener("click", () => {
//     if (mode==="light"){
//         mode="black";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         mode="light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
// })



// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector(".reset-btn")

// let turn0 = true;
// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]


// ]
// boxes.forEach((box) =>
// {
//     box.addEventListener("click", () =>{
//         console.log("box was clicked");
//         if(turn0){
//             box.innerText = "O";
//             turn0=false;
//         }else{
//             box.innerText = "X"
//             turn0=true
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });


// const checkWinner = () =>{
//     for (let pattern of winPatterns){
//         console.log(boxes[pattern[0]], boxes[pattern[2]], boxes[pattern[3]]);
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if(pos1val != "" && pos2val != "" && pos3val != ""){
//             if(pos1val===pos2val && pos2val===pos3val){
//                 console.log("winner");
//             }
//         }

//     }
// }



let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "Varshu";
            // box.innerText.body.style.color = "darkgreen";
            turnO = false;
        } else {
            box.innerText = "Mummy";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showWinner = (winner) => {
msg.innerText = `Congratulations! Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                // You might want to do something here when a winner is found
            }
        }
    }
};


newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);