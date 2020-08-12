class parent {
    constructor(){
        this.fatherName = "hankons"
    }
}

class Child extends parent {
    constructor(name) {
        super();
        this.name = name
    }
    getFullName () {
      return this.name + ' ' + this.fatherName;
    }
}

const babyName = new Child("arnold");
const babyName2 = new Child("tom");
console.log(babyName.getFullName());
console.log(babyName2.getFullName());

//must search and learn object oriented programming core concepts