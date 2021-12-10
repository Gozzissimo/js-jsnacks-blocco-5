// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

const letters = [
    'a',
    'b',
    'c',
];
const numbers = [
    1,
    2,
    3,
];

function mergeArray(array1, array2) {
    const newArray = [];

    for (let i = 0; i < array1.length; i++) {
        
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}

let result = mergeArray(letters, numbers);
console.log(result);