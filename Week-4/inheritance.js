var Person = function() {} 

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

var Teacher = function() {}
Teacher.prototype = new Person()
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}
var teacher = new Teacher()
teacher.initialize("Prateek", 27)
teacher.teach("JavaScript")
