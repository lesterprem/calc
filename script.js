const buttonset=document.querySelector('.buttoncontainer');
for(let i=15;i>=0;i--){
    btndiv=document.createElement('div');
    buttonset.appendChild(btndiv);
}

let result=0;
let firstNum=[];
let secondNum=[];
let operator=""


let buttonLabel=[1,2,3,'+',4,5,6,'-',7,8,9,'x',"0","C","=","/"];
const buttons=Array.from(document.querySelectorAll('.buttoncontainer div'));

buttons.forEach((item, index) => {
    if(buttonLabel[index]){
        item.textContent=buttonLabel[index];
    }
});

buttons.forEach((item) =>{
    currentNum=0;
    item.addEventListener("click",(txt) =>{
        if(Number.isInteger(txt.target.textContent)){
            if(currentNum=0){
                firstNum.push(txt.target.textContent);
                console.log(firstNum);
            } else if (currentNum=1){
                secondNum.push(txt.target.textContent);
                console.log(secondNum);
            } 
        }
        else if (txt.target.textContent==="="){
            evaluate();
        } else{
            if(currentNum=0){
                operator=txt.target.textContent;
            }
            else{
                disableOperators();
            }
        }
    } );
});

function disableOperators(){
    console.log("disableOperators");
};
function evaluate(){
    console.log("evaluate");
};