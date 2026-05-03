// function sayHello(){
//     console.log("hello");
// }
// sayHello();

// console.log(sayHello.name);
// console.log(sayHello.length); //to know how many params do we provide

// let talk = sayHello;
// talk();

// //anonymous functions
// let someFunc = function (){
//     console.log("anon func");
// }
// someFunc();
// console.log(someFunc.name);

// //params 
// let multiply = function(num1, num2){
//     return num1*num2;
// }
// console.log(multiply(4,5));

//arrow functions
// const additionA = (num1, num2) => {
//     console.log(num1, num2)
//     return num1+num2;
// }
// const additionB = (num1, num2) => num1 + num2;
// const days = () => 365;
// const hello = () => console.log("hello");

// console.log(additionA(3, 7));
// console.log(additionB(3, 7));
// console.log(days());
// hello();

// const display = function showAnswer(val){
//     console.log(`calculated ${val}`);
// }
// // display(555);

// function doSomeWork(num1, num2, doWhenFinenshed){
//     let info = num1*num2;
//     doWhenFinenshed(info);
// }
// doSomeWork(2, 5, display); 

// const numArr = [1, 35, 68, 5666, 354];
// const sortMachine = (a, b) => a-b;
// console.log(numArr.sort(sortMachine));

// const myFunc = (oneNum, i, wholeArr)=> {
//     console.log(`${i}: ${oneNum} from ${wholeArr}`)
// };

// const numArray = [5, 10, 15];
// numArray.forEach(myFunc); //????? how does it know where is uor index 

//MAP
// const nos = [1, 2, 3, 4, 5];
// const result = nos.map((num, index, wholeArr) => {
//     console.log(`${index}: ${num} from ${wholeArr}`);
//     return num*2;
// });
// console.log(result);

//FILTER
// const nos = [1, 2, 3, 4, 5];
// const filtured = nos.filter((num, index, wholeArr) => {
//     console.log(`${index}: ${num} from ${wholeArr}`);
//     return num%2===0;
// });
// console.log(filtured); 
// const filtured = nos.filter((value) => (value%2===0));

//REDUCE
// const nos = [1, 2, 3, 4, 5];
// const sum = nos.reduce((prev, curr, currIndex, wholeArr) =>{
//     console.log(`${currIndex}: prev:${prev} curr:${curr} from ${wholeArr}`);
//     return prev + curr;
// }, 0);

const someNos = [2, 3, 4, 5, 6];
const totalOfDoubleEvenNos = someNos
    .filter((value) => value%2==0)
    .map((value) => value*2)
    .reduce((prev, curr) => prev+curr, 0);
console.log(totalOfDoubleEvenNos);