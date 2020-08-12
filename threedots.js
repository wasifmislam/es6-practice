//to add arrays use concat
const age = [23,34,36,21]
const age1 = [ 12,25,17,29]
const age3 = [45,67,23,78,87]
const allAges = age.concat(age1).concat([6607]).concat(age3);
const allAges2 = [...age, ...age1, 3335, ...age3]  //(this is called spread operator)
//console.log(allAges2);
const business = 650;
const doctor =  450;
const player = 550;
const mixed = [650,450,550, 867,1250]
//const maximum = Math.max(business,doctor,player);
const maximum = Math.max(...mixed)

console.log(maximum);