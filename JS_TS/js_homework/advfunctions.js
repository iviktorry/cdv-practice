// function formatCurrency(symbol){
//     return function(amount){
//         return `${symbol}${amount}`;
//     }
// }
// const dollar = formatCurrency('$');
// console.log(dollar(3));

// function multiplyByTwo(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }
// const arr = [5, 6, 7, 8];
// let aa = multiplyByTwo(arr);
// aa.forEach(element => {
//   console.log(element) ;
// });

// const arr = [5, 6, 7, 8];
// let multipliedArr = arr.map(el => {
//     return el*2;
// })
// arr.forEach(element => {
//   console.log(element);
// });
// multipliedArr.forEach(element => {
//   console.log(element);
// });

// function welcome(name){
//     return function(greet){
//         return function(){
//             return `${greet} ${name}!`;
//         }
//     }
// }
// const helloJohn = welcome('John')('Hello');
// console.log(helloJohn());

// function add(a) {
//   let ans = a;
//   return function inner(b) {
//     if (!b) {
//       return ans;
//     }
//     ans += b;
//     return inner;
//   };
// }
// console.log(add(1)(2)(3)(4)());


// let ourFunc = (...numbers) => {
//     return (numbers.reduce((prev, curr) => {
//         return prev + curr;
//     }, 0))/numbers.length;
// }
// console.log(ourFunc(1, 2, 3, 4, 5));

// let ourFunc = (num1, num2) => (num1 + num2)/2;
// console.log(ourFunc(3, 6));
