const person = {name: 'jack', age:34, occupation:'programmer',country:'america', phone:23222, state:'dallas'}
const {occupation, phone, name,salary,age} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger',
    }
}


const {leader} = complexObject.info;
console.log(leader);
//console.log(occupation,phone,name,salary,age)

//mdn destructuring article search and learn
const friends = ['aliim', 'kamran', 'roxin', 'shanto', 'mohi'];
const [fName, f3Name, ...remaining] = friends;
console.log(fName,f3Name,remaining);
