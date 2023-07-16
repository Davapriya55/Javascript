const button = document.querySelector('button');

let resultdiv = document.createElement('div')
resultdiv.id = "result";
document.getElementById('container').appendChild(resultdiv);

button.addEventListener('click',clic);
function clic(){
    const input = document.getElementById('input');
    const name = input.options[input.selectedIndex].value;
    let abb='', use='';
    switch(name){
        case 'Html': abb= 'HTML stands for Hyper Text Markup Language'
                    use = 'HTML is the standard markup language for creating Web pages'
        break
        case 'Css': abb ='CSS stands for Cascading Style Sheets'
                    use = 'CSS describes how HTML elements are to be displayed on screen, paper, or in other media';
        break
        case 'JavaScript': abb ='JavaScript is the Programming Language for the Web.'
                    use = 'JavaScript can update and change both HTML and CSS.'
        break
    }
    let text=   `${name} stands for ${abb} which is used to ${use}`;
    console.log(text);
    document.getElementById('result').innerHTML = text;
}