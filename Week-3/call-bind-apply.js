const employee1 = {
    firstName: "Abhishek",
    lastName: "Bankar"
}

const employee2 = {
    firstName: "Prateek",
    lastName: "Lalwani"
}

// Object for call and bind method
const employeeToGetHike = {
    firstName : "Satish",
    lastName: "Kasare",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

// Example of bind method
let fullNameOfEmployeeToGetHike = employeeToGetHike.fullName.bind(employee1)
console.log(`This is result of bind method: ${fullNameOfEmployeeToGetHike()}`)

// Example of call method
let callMethod = employeeToGetHike.fullName.call(employee2)
console.log(`This is result of call method: ${callMethod}`)

// Object for apply method example
const employeeToGetHikeFromOffice = {
    firstName: "Abhishek",
    lastName: "Bankar",
    fullNameAndOffice: function(officeLocation, hikePercentage){
        return `${this.firstName} ${this.lastName} from ${officeLocation} will get of ${hikePercentage}%`
    }
}

let applyMethod = employeeToGetHikeFromOffice.fullNameAndOffice.apply(employee1, ["india", "20"])
console.log(`This is result of applyMethod: ${applyMethod}`)

// call method can also be used for employeeToGetHikeFromOffice method but apply method has benefit of passing array