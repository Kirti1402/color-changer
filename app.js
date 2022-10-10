const tomato= document.querySelector(".tomato")
const purple= document.querySelector(".purple")
const green= document.querySelector(".green")

var root = document.querySelector(':root');


function changeColor(color){

    var rootstyle=getComputedStyle(root);

    if(color === 'tomato'){
        root.style.setProperty('--main-container', 'tomato');
        root.style.setProperty('--block-color', '#171717');
        root.style.setProperty('background-color', '#CDDEFF');
        root.style.setProperty('--button-color', '#F6ECF0');
        root.style.setProperty('--text-color', 'black');
    } else if(color === 'purple'){
        root.style.setProperty('--main-container', '#B1B2FF');
        root.style.setProperty('--block-color', '#655D8A');
        root.style.setProperty('background-color', '#FAF4B7');
        root.style.setProperty('--button-color', '#655D8A');
        root.style.setProperty('--text-color', 'white');
    } else{
        root.style.setProperty('--main-container', '#D3E4CD');
        root.style.setProperty('--block-color', '#171717');
        root.style.setProperty('background-color', '#D5BFBF');
        root.style.setProperty('--button-color', '#F5E8C7');
        root.style.setProperty('--text-color', 'black');

    }
    

}


tomato.addEventListener('click',() =>changeColor('tomato'))
purple.addEventListener('click',() =>changeColor('purple'))
green.addEventListener('click',() =>changeColor('green'))