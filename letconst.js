const firstName = "Tom cruise";
//firstName = "Brad"
console.log(firstName);
// if variable set by const you can not change it's value.

const numbers = [ 12,45]
//console.log(numbers);
numbers [1] = 88;
numbers.push(12);
const hero = { name: "brad", phone:5674};
console.log(numbers);
// you can change position's value, push,change elements, update elements while using const variable. but can not change full array 
//e.g: you have an array of numbers but you can not change it to in names.
// you can change object's value like change phone numbers

let patientName = "saifur ali"
patientName = "salma akhter"
console.log(patientName);
//by using let you can change that variable.
let sum = 0;
for (let i = 0; i <10; i++) {
    sum = sum+i;
}
console.log(i)
//if you use let you can not get result from outside as let consider as a scope variable.