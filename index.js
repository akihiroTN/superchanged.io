/*
const block =document.getElementById("dis");
document.getElementById("button").addEventListener("click",()=>{
    if(block.style.display=="none"){
        block.style.display="block";
        document.getElementById("button").innerText="−";
    }else{
        block.style.display="none";
        document.getElementById("button").innerText="＋";
    }
});

*/

function startset(value,btn){
    const change=document.getElementById(value);
    if(change.style.display=="none"){
        change.style.display="block";
        document.getElementById(btn).innerText="−";
    }else{
        change.style.display="none";
        document.getElementById(btn).innerText="＋";
    }
}