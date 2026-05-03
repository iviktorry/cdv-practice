//task 1
//1
// const square = (num) => num**2;
// console.log(square(5, 2));


//2
//for loop
// const arr = [5, 2, 3];
// const square = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i]**2;
//     }
//     return sum;
// }
// console.log(square(arr));

//for of
// const arr = [5, 2, 3];
// const square = (arr) => {
//     let sum = 0;
//     for (const item of arr){
//         sum = sum + item**2;
//     }
//     return sum;
// }
// console.log(square(arr));

//for in
// const arr = [5, 2, 3];
// const square = (arr) => {
//     let sum = 0;
//     for (let item in arr){
//         let num = arr[item];
//         sum += num**2;
//     }
//     return sum;
// }
// console.log(square(arr));

//forEach
// const arr = [5, 2, 3];
// sum = 0;
// arr.forEach((num) => {
//     sum += num**2;
// });
// console.log(sum);

//3
// const arr = [5, 2, 3];
// let sum = 0;
// const square = (num) => sum += num**2;
// arr.forEach(square);
// console.log(sum);



//task 2
// function sumOfNums(p1, p2){
//     if(!p1) return NaN;
//     let sum = 0;
//     for(let i = 0; i<arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sumOfNums());
// console.log(sumOfNums(5, 6, 7, 9, 0, 444));

 //arrow
// let sumOfNums2 = (...numbers) => {
//     if(numbers ===0) return NaN;
//     let sum = 0;
//     for(const num of numbers) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumOfNums2());
// console.log(sumOfNums2(5, 6, 7, 9, 0, 444));

//task 3
// function boolTrue() {
//     let state = true;
//     return function boolFalse(){
//         state = !state;
//         return state;
//     }
// }
// const boolAlt = boolTrue();
// console.log(boolAlt());
// console.log(boolAlt());
// console.log(boolAlt());

//arrow
// const boolTrue = () => {
//     let state = true;
//     return () => state = !state
// }
// const boolAlt = boolTrue();
// console.log(boolAlt());
// console.log(boolAlt());
// console.log(boolAlt());