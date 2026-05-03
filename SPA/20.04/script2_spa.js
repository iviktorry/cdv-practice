//task 1
// const car = {
//     brand: 'lada',
//     price: 1000,
//     power: 50, 

//     incPower(value){
//         return this.power += value;
//     }
// }

// console.log(car);
// console.log(car.incPower(1000));
// console.log(car);
//------------------------- 

// function Car (brand, price, power){
//     this.brand = brand;
//     this.price = price;
//     this.power = power;
// }

// Car.prototype.incPower = function (value){
//     this.power += value;
// }

// Car.prototype.toString = function (){
//     console.log(`brand: ${this.brand}, price: ${this.price}, power: ${this.power}`)
// }

// const display = (myArr) => {
//     for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
//     }
// }

// const myLada = new Car('Lada', 10, 20);
// console.log(myLada);
// myLada.incPower(50);
// console.log(`lada power is ${myLada.power}`);

// const myBMW = new Car('BMW', 50, 10);
// const myToyota = new Car('Lada', 20, 70);

// myArr = [myLada, myBMW, myToyota];
// display(myArr);

// myBMW.incPower(1000);
// display(myArr);

// console.log(myBMW.toString());
// console.log(myLada.toString());
// console.log(myToyota.toString());


//task 2

// function Car (brand, price, power){
//     this.brand = brand;
//     this.price = price;
//     this.power = power;
// }

// const display = (myArr) => {
//     for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
//     }
// }

// const myLada = new Car('Lada', 10, 20);

// console.log(JSON.stringify(myLada));

// const jsonCar = '{"brand": "lada", "price": 100, "power": 2000}';
// console.log(jsonCar);
// const carObj = JSON.parse(jsonCar);
// console.log(carObj);
