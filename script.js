

function display(val){
    document.getElementById("result").value+=val;
}

function solve(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
function clr(){
    document.getElementById("result").value="";
}
function backspace(){
    let x=document.getElementById("result").value;
    document.getElementById("result").value=x.substr(0,x.length-1);
}