// let clickElem = document.getElementById('clicker');

// clickElem.addEventListener("click", (event) => {
//     let counter = 0;
//     counter++;
//     let elemFontSize = parseFloat(event.target.style.fontSize);
//     console.log(elemFontSize);
//     event.target.style.fontSize = (elemFontSize + 2) + "px";
// });


// clickElem.addEventListener("dblclick", (event) => {
//     event.target.style.fontSize = '10px';
// });

// document.addEventListener('click', (event) => {
//     let x = event.screenX;
//     let y = event.screenY;
//     console.log(`x${x} y${y}`);
// })


// function Calculate(value){
//     for (let i = value; i >= 0; i -- ){
//         console.log(i);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     Calculate(50);
// })

// let button = document.getElementById('button');


// function Calculate(value){
//     for (let i = value; i >= 0; i -- ){
//         console.log(i);
//     }
// }

// button.addEventListener('click', () => {
//     let inputNum = parseInt(document.getElementById('number').value);
//     Calculate(inputNum);
// })

let button = document.getElementById('button');

function Calculate(op, value1, value2){
    let result = 0;
    switch(op) {
        case "Plus":{
            result = value1 + value2;
            break;
        }
        case "Minus":{
            result = value1 - value2;
            break;
        }
        case "Multiply":{
            result = value1 * value2;
            break;
        }
        case "Divide":{
            result = value1 / value2;
            break;
        }
    }
    return result;
}

button.addEventListener('click', () => {
    let inputNum1 = parseInt(document.getElementById('number1').value);
    let inputNum2 = parseInt(document.getElementById('number2').value);
    let optionCalc = document.getElementById('select').value;
    // let result = parseInt(document.getElementById('result').value);

    let result = Calculate(optionCalc, inputNum1, inputNum2);
    // toString(result);
    document.getElementById('result').innerHTML = result;
    console.log(document.getElementById('result').innerHTML);
})