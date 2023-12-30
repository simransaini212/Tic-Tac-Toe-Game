let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let newBtn= document.querySelector("#newBtn");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector("#msg");
let turn0= true;
let count=0; //to track draw
const rstbtn=()=>
{
turn0=true;
enableBox();
count=0;
msgContainer.classList.add("hide");

}

let winningPattern= [
[0,3,6],
[1,4,7],
[2,5,8],
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6]
];

boxes.forEach((box)=>{
box.addEventListener("click",()=>
{
// console.log("box was clicked");
if(turn0){
    box.innerText="O";
box.style.color="#3c6e71";
    turn0= false;
}
else{
    box.innerText="X";
    box.style.color="White";
    turn0= true;
}
box.disabled=true;
count++;
checkWinner();
});
});
const gameDraw=()=>
{
    msg.innerText= `Game was a Draw!`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const disableBox=()=>
{
    for(let box of boxes)
    {
        box.disabled= true;
    }
}
const enableBox=()=>
{
    for(let box of boxes)
    {
        box.disabled= false;
        box.innerText="";
    }
    
}
const showWinner=(winnr)=>
{
    msg.innerText=`Congratulations! Winner is ${winnr}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner=()=>
{
    for(let winner of winningPattern){
    let pos1= boxes[winner[0]].innerText;
    let pos2= boxes[winner[1]].innerText;
    let pos3= boxes[winner[2]].innerText;
if(pos1 !=="" && pos2!== "" && pos3!=="")
{
    
    if(pos1=== pos2 && pos2===pos3)
    {
        showWinner(pos1);
    }
    else if(count===9){
        msg.innerText="Game was a Draw!.";
        msgContainer.classList.remove("hide");
        disableBox();
    }
}

    };
   
   
}
newBtn.addEventListener("click", rstbtn);
resetbtn.addEventListener("click",rstbtn);

