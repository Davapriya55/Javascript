function convert(){

    let name=document.getElementById("demo").value;
    let nam=name.charAt(Math.round(Math.random()*name.length))
    let result=document.getElementById("result")
    result.innerHTML = nam;
}
