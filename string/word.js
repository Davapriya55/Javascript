// function convert(){
//     let wor=document.getElementById("inp").value;
//     let numw=0;
//     for(let i=0;i<wor.length;i++){
//         let curch=wor[i];
//         if(curch==" "){
//             numw+=1;
//         }
//     }
//     document.getElementById("result").innerHTML = numw;
// }

function convert(){
    let wor=document.getElementById("inp").value;
    let numw=wor.split(" ").length;
    document.getElementById("result").innerHTML = numw;
}