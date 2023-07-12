function total()
{
    let htmmark= Number(document.getElementById("htm").value)
    let csmark= Number(document.getElementById("cs").value)
    let pymark= Number(document.getElementById("py").value)
    let recmark= Number(document.getElementById("rec").value)
    let phmark= Number(document.getElementById("ph").value)
    let tot= htmmark+csmark+pymark+recmark+phmark
    let per= (tot/500)*100
    let result=document.getElementById("result")
    result.innerHTML = "Totals " + tot.toFixed(2)
    let Percentage=document.getElementById("perc")
    Percentage.innerHTML = "Percentage  " + per.toFixed(2)
}