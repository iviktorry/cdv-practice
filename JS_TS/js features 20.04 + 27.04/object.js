// const emptyObj = {};
// console.log(emptyObj);

// const employer = {
//     name: 'John',
//     dob: '2000',
//     address: {
//         street: 'kutzeby',
//         city: 'poznan'
//     },
//     callme(){
//         console.log(`called`);
//     }
// }
// console.log(employer);
// console.log(employer.address.city);
// employer.callme();
// console.log(employer['dob']);

// const shipX = 20;
// const shipY = 30;
// const shipPosition = {
//     shipX: shipX,
//     shipY: shipY
// };
// const submarine = {shipX, shipY};
// console.log(submarine);
// submarine.shipZ = -50;
// console.log(submarine);
// console.log(submarine.fuel);
// delete submarine.shipZ
// console.log(submarine);
// submarine.fuel = -50;

// if('fuel' in submarine){
//     console.log('has fuel');
//     console.log(submarine);
// }

// let aa = 5;
// let bb = aa;
// aa= 20;
// console.log(aa);
// console.log(bb);

// let carA = {
//     fuel: 100
// }
// let carB = carA;
// let fiat = carA;
// let bmw = {...carA, people: 2};

// carA.fuel = 50;

// console.log(carA);
// console.log(carB);
// console.log(fiat);
// console.log(bmw);

// for (const aKey in fiat){
//     console.log(`${aKey} => ${fiat[aKey]}`);
// }

const showBusket = function({name, quantity, price, discount, voucher}) {
    console.log(`${name} ${quantity} 
        ${price} ${discount} ${voucher}`);
}

const today = {
    name: 'biedronka',
    quantity: 5,
    price: 2,
    discount: 10,
    voucher: 111
}

showBusket({name: 'biedronka', quantity: 5, price: 2, discount: 10, voucher: 111});

const info = JSON.stringify(today);
console.log(info);

