//arrays, functions and objects (cont.)
//practice before class
//040 ผมไม้มาดูแมวที่ห้อง
function calculateTotalPages(items, itemsPerPage) {
    if (itemsPerPage <= 0) {
        throw new Error("itemsPerPage must be greater than 0");
    }
    return Math.ceil(items / itemsPerPage);
}

console.log(calculateTotalPages(55, 10)) // 6
console.log(calculateTotalPages(0, 10)) // 0
//console.log(calculateTotalPages(100, 0)) // 0
console.log(calculateTotalPages(9, 3)) // 4

//create object with literals
const book={
    title: "Prison break",
    title: "Alice in wonderland",
}
console.log(book.title) // Alice in wonderland note: key can duplicate but only last one will be kept

const person = {
    firstName: "Mai",
    lastName: "Sudlor",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    isAdult(){
        return this.age >= 18;
    },
    address: {
        street: "puthabucha",
        city: "bangkok",
        country: "bangkok"
    }
}

console.log(person.fullName()) // Mai Sudlor
console.log(person.isAdult()) // true
console.log(person.isAdult) // [Function: isAdult] 
console.log(person.address.city) // bangkok

person.age = 31 // mutate age property
person.address = { 
    street: "sukhumvit",
    city: "bangkok",
    country: "thailand"
}
console.log(person.age) // 31
console.log(person.address) // { street: 'sukhumvit', city: 'bangkok', country: 'thailand' }

//add new property
person.email = "mai@email.com"
console.log(person.email)

//delete object property
delete person.age
console.log(person.age) // undefined
delete person.address
console.log(person.address) // undefined

//constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return this.year + " " + this.make + " " + this.model;
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);
console.log(car1.getCarInfo()) // 2020 Toyota Camry
console.log(car2.getCarInfo()) // 2019 Honda Civic

//es6 class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    getAnimalInfo() {
        return this.name + " is a " + this.species;
    }
}

const animal1 = new Animal("Leo", "Lion");
const animal2 = new Animal("Molly", "Cat");
console.log(animal1.getAnimalInfo()) // Leo is a Lion
console.log(animal2.getAnimalInfo()) // Molly is a Cat
console.log(animal1.name) // Leo
console.log(animal2.species) // Cat

//use object.create(existing obj) to create object
const cat = Object.create(animal2)
cat.name = "Khaowtom"
cat.species = "Cat"
console.log(cat.getAnimalInfo()) // Khaowtom is a Cat

//loop through object properties
for (let key in person) {
    let value = person[key] // object[key] or object.key (manual access)
    console.log(key + ": " + value)
}

//object are mutable and manipulated by reference
const objA = { x: 10, y: 20 }
const objB = objA // objB references the same object as objA
objB.x = 30 // mutate property x via objB
console.log(objA.x) // 30 change is reflected in objA

//checking equality of objects
console.log(objA === objB) // true, both reference the same object
const objC = { x: 30, y: 20 }
console.log(objA === objC) // false, different objects in memory

//compare properties manually
const std1 = { id: 1, name: "Somchai" }
const std2 = { id: 1, name: "Somchai" }
function isStudentEqual(student1, student2) {
    return student1.id === student2.id && student1.name === student2.name
}
console.log(isStudentEqual(std1, std2)) // true

//object methods return array of keys, values, entries
console.log(Object.keys(std1)) // ['id', 'name']
console.log(Object.values(std1)) // [1, 'Somchai']
console.log(Object.entries(std1)) // [['id', 1], ['name', 'Somchai']]

//pracetice
//1.Create a Function that Returns Full Address and Write a function getFullAddress(user) that returns "Rama 9, Bangkok, Thailand"
const user = {
    name: "Jane",
    address: {
        street: "Rama 9",
        city: "Bangkok",
        country: "Thailand"
    }
};

function getFullAddress(user) {
    return user.address.street + ", " + user.address.city + ", " + user.address.country;
}

console.log(getFullAddress(user)) // Rama 9, Bangkok, Thailand

//2. Add a Method to an Object After Creation and Add a method called describe that returns: "Bingo is a Beagle"
const dogo = {
    name: "Bingo",
    breed: "Beagle"
};
dogo.describe = function() {
    return this.name + " is a " + this.breed;
}
console.log(dogo.describe()) // Bingo is a Beagle

//3. Write a function countProperties(obj) that takes any object and returns the number of its own properties (not from the prototype).
const car = { make: "Toyota", model: "Corolla", year: 2021 };
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties(car)); // 3
