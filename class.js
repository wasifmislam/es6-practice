class student {
    constructor ( sId, sName) {
        this.id = sId;
        this.name = sName;
        this.profession = "actor";
    }

}

const student1 = new student (11,'robinson' );
const student2 = new student (22, 'wiliamson');
const student3 = new student (45, 'julia')

//you can create similiar type object with this class
//you can access only property on an object
//console.log(student1.name, student2.name)
//console.log(student1, student2);
console.log(student3);
//same structure , same amount of properties diye onkgula object banano jabe