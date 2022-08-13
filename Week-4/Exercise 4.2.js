var Person = function () {};
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

// Class Teacher inherits Person
class Teacher extends Person{
    constructor(name, age){
        // Calling initialize method of parent class
        super().initialize(name, age);
    }
    // adding teach method
    teach(subject){
        console.log(this.name + " is now teaching " + subject)
    }
}

// TODO: create the class Teacher and a method teach
var him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");
