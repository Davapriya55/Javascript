function convert(){
    const input = document.getElementById("inp").value;
    const val = input.split(" ");
    console.log(val)
    const val1 = Number(val[0]);
    console.log(val1)
    const val2 = val[1];
    console.log(val2)
    const val3 = Number(val[2]);
    console.log(val3);
    let result=0
    switch(val2){
        case '+' : result = val1+val3
                    break;
        case '-' : result = val1-val3
                    break;
        case '*' : result = val1*val3
                    break;
        case '/' : result = val1/val3
                    break;
    }
    let result1=document.getElementById("result")
    result1.innerHTML = result;
}
