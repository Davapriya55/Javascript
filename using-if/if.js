function calc(){
    let amt=Number(document.getElementById("inp").value)
    let mon=Number(document.getElementById("mon").value)
    let res=document.getElementById("res")
    if(mon==1||mon==2||mon==3){
        res.innerHTML=amt*5.8/100 + "  Interest";
    }   
    else if(mon==4||mon==5||mon==6){
        res.innerHTML=amt*6.5/100 + "  Interest";
    } 
    else if(mon==7||mon==8||mon==9){
        res.innerHTML=amt*6.8/100 + "  Interest";
    } 
    else{
        res.innerHTML=amt*7/100 + " Interest";
    }
}