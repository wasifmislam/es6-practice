// function doubleIt (number) {
//     return number *2;
// }

// const doubleIt = function (num) {
//     return num *2;
// }

const doubleIt = num => num *2  //this is arrow function (single parameter)
const add = (x,y) => x+y; // more than one parameter
const give5 = () =>5; // no parameter
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = add(50,70);
const result2 = give5();
const result3 = doMath(8,5);
console.log(result3);