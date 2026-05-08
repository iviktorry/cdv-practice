// function someFun(){
//     someFun.counter++;
//     console.log("abccc")
// }
// someFun();
// console.log(someFun.name);
// console.log(someFun.length);

// someFun.counter=0;
// someFun();
// someFun();

// console.log(someFun.counter);


////memoization
// function square(num){
//     square.cache = square.cache || {};
//     if (square.cache[num]){
//         console.log("using cache value");
//         return square.cache[num];
//     }
//     console.log("calculating value");
//     let ans = num**2;
//     square.cache[num] = ans;
//     return ans;
// }

// console.log(square(5));
// console.log(square(9));
// console.log(square(5));
// console.log(square(5));
// console.log(square(9));
// console.log(square.cache);

// // function redefinition 
// function saySomething (){
//     console.log("welcome to cdv");
//     saySomething = function (){
//         console.log("hello once again");
//     }
// }
// saySomething();
// saySomething();
// saySomething();
// saySomething();
// saySomething();



// // IIFE -  immediately invoked functions 

// (() => {
//     let  aa =2;
//     console.log(`initiated ${aa}`);
// })(); 

// function recurse(num){
//     //basecase \/
//     if (num=> 0){
//         recurse(num-1)
//     }
// }
// recurse(5); //error


// //closures 
// function userSpeaking(user){
//     function userSays(message){
//         return `${user} says ${message}`;
//     }
//     return userSays;

// }
// const user = "john";
// const currentUser = userSpeaking(user);
// console.log(currentUser("welcome"));
// console.log(currentUser("to"));
// console.log(currentUser("cdv"));



// //generic funcs
// function calculate(aa, bb, operator){
//     function restrict(num){
//         if(num<0) return 0;
//         else if (num>10) return 10;
//         return num;
//     }
//     return operator(restrict(aa), restrict(bb));
//     // switch(operator){
//     //     case 'multiply': return aa*bb;
//     //     case 'plus': return aa+bb;
//     //     case 'minus': return aa-bb;
//     // }
// }

// const multiply =(a, b) => a*b;
// const plus =(a, b) => a+b;
// const minus =(a, b) => a-b;

// console.log(calculate(4, 11, multiply));


// //  timers
// setTimeout(() => {
//     console.log("aaaaaaaaa");
// } ,5000);


//tasks on the lesson

// function formatCurrency(symb){
//     function formatSymbol(num){
//         return `${symb} ${num}`;
//     }
//     // return `${symb}`
// }
// const dollar = formatCurrency('$');
// console.log(dollar(3));
// console.log(dollar(3));