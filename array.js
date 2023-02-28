// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];

// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));


// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array elements
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }

}

console.log("---- FOR EACH ------");

movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});
*/

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

