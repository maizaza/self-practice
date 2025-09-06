//functional programming

//practice before class
// 040 ผมไม้มาดูแมวที่ห้อง
function getFreqofWords(sentence) {

    if (typeof sentence !== 'string' || sentence.trim() === '') {
        return undefined;
    }
    const words = sentence.split(" ");
    const freq = {};
    for (const word of words) {
        if (freq[word]) {
            freq[word] += 1;
        } else {
            freq[word] = 1;
        }
    }
    return freq;
}

console.log(getFreqofWords("hello world hello")) // { hello: 2, world: 1 }
console.log(getFreqofWords("")) // undefined
console.log(getFreqofWords("   ")) // undefined
console.log(getFreqofWords(123)) // undefined
console.log(getFreqofWords("one two three two one one")) // { one: 3, two: 2, three: 1 }

// functions declaration
// normal function
function sums(a, b) {
    return a + b;
}
console.log(sums(2, 3)) // 5
// arrow function
const sum = (a, b) => a + b; // implicit return
console.log(sum(2, 3)) // 5
// no parameter
const greet = () => "Hello";
console.log(greet()) // Hello
// one parameter
const square = x => x * x;
console.log(square(5)) // 25
// multiple parameters
const add = (a, b, c) => a + b + c;
console.log(add(1, 2, 3)) // 6
// multiple lines statements
const factorial = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)) // 120

const x = sums // function reference
console.log(x(2, 3)) // 5

// function expression
const multiply = function (a, b) {
    return a * b;
}
console.log(multiply(2, 3)) // 6

// function with parameter function
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(2, 5, sums)) // 6
console.log(calculate(2, 3, multiply)) // 6
console.log(calculate(2, 3, (x, y) => x - y)) // -1

//console.log(calculate(10, 2, sums(10, 2))) // passing return value of sums function, not function reference //error

//rest parameter
function sumallrest(...args) {
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
}
console.log(sumallrest(1, 2, 3, 4, 5)) // 15

// arguments object
function sumAllargument() {
    let total = 0;
    for (const num of arguments) {
        total += num;
    }
    return total;
}
console.log(sumAllargument(10, 10, 10, 10, 10)) // 50

//default parameter
function greetPerson(name = "Guest") {
    return "Hello, " + name;
}

console.log(greetPerson("Mai")) // Hello, Alice
console.log(greetPerson()) // Hello, Guest

//pracetice
//Write a function filterEvens(numbers) that takes an array of numbers and returns only the even numbers using arrow function.
const numbers = [1, 2, 3, 4, 5, 6];
const filterEvens = (numbers) => {
    let evens = []
    for (const num of numbers) {
        if (num % 2 === 0) {
            evens.push(num)
        }
    }
    return evens
}
console.log(filterEvens(numbers)) // [2, 4, 6]