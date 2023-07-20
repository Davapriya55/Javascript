// /*console.log("hello")
// let mark=0
// mark=10
// console.log(mark)*/

// let name = prompt("Enter your name");
// console.log("hello",name);

function convert()
{
    let celval= Number(document.getElementById("inp").value)
    let fahval= celval*1.8+32
    let result= document.getElementById("result")
    result.innerHTML= fahval + "  fahrenheit"
}