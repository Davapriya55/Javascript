function convert(){
    let uni=Number(document.getElementById("inp").value)
    let res=document.getElementById("result")
    let fst=uni*0.75;
    let sec=(uni*1)+fst;
    let thi=(uni*1.30)+sec;
    console.log(uni);
    if(uni<50){
        res.innerHTML=fst + " rs";
    }
    else if(uni>=50||uni<150){
        res.innerHTML=sec + " rs";
    }
    else if(uni>=150||uni<250){
        res.innerHTML=thi + " rs"
    }
    else{
        res.innerHTML=(uni*1.50)+thi + " rs"
    }
}
// function convert(){
//     let uni=Number(document.getElementById("inp").value)
//     let res=document.getElementById("result")
//     console.log(uni);
//     if(uni<50){
//         var fst=uni*0.75;
//         res.innerHTML=fst + " rs";
//     }
//     else if(uni>=50||uni<150){
//         var sec=(uni*1)+fst;
//         res.innerHTML=sec + " rs";
//     }
//     else if(uni>=150||uni<250){
//         var thi=(uni*1.30)+sec;
//         res.innerHTML=thi + " rs"
//     }
//     else{
//         res.innerHTML=(uni*1.50)+thi + " rs"
//     }
// }