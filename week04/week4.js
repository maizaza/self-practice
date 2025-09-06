//arrays methods

const fruits = ['apple', 'banana', 'cherry', "strawberry", "blueberry"];
//1. annoymous arrow function (no name function)
fruits.filter((fruit) => fruit.startsWith('b'));
console.log(fruits) //original array is not changed

//2. named arrow function
const startsWithB = (fruit) => fruit.startsWith('b');
const bFruits = fruits.filter(startsWithB);
console.log(bFruits) //new array with filtered values

//.map is used to transform each element in the array
//.filter is used to filter elements based on a condition
//.reduce is used to reduce the array to a single value
//.find is used to find the first element that matches a condition
//.findIndex is used to find the index of the first element that matches a condition

const employees = [
    { firstname: "Somchai", lastname: "Jaidee"},
    { firstname: "Pornchai", lastname: "Deejai"},
    { firstname: "Suda", lastname: "Rakdee"},
]
//output:['SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE']
// map
const fullNames = employees.map(emp => `${emp.firstname.toUpperCase()} ${emp.lastname.toUpperCase()}`);
console.log(fullNames)

//output: ["SOMCHAI JAILDEE", "PORNCHAI DEEJAI"]
//040 ผมไม้สุดหล่อมาดูแมวที่ห้อง
//map+filter
const filteredNames = employees
    .map(emp => `${emp.firstname.toUpperCase()} ${emp.lastname.toUpperCase()}`)
    .filter(name => name.includes('JAI'));
console.log(filteredNames)

//reduce
const sum = [1,2,3,4,5].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum) //15

//find
const foundEmployee = employees.find(emp => emp.firstname === 'Suda');
console.log(foundEmployee) //{ firstname: "Suda", lastname: "Rakdee"}

//practice in class
const carts = [
    { product: "Laptop", price: 1000, quantity: 2 },
    { product: "Phone", price: 500, quantity: 3 },
    { product: "Tablet", price: 300, quantity: 4 },
]
//net price = total price * vat 7%
//map + reduce
const netPrices = carts
    .map(item => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0) * 1.07;
console.log(netPrices) //5029

//array manipulation
let numbers = [1,2,3,4,5];
numbers[numbers.length] = 6 //add 6 at the end of the array
console.log(numbers)
//push
numbers.push(7) //add 7 at the end of the array by push method
console.log(numbers)
//pop
numbers.pop() //remove the last element of the array
console.log(numbers)
//shift
numbers.shift() //remove the first element of the array
console.log(numbers)
//unshift
numbers.unshift(0) //add 0 at the beginning of the array
console.log(numbers)
//splice
numbers.splice(2, 0, 1.5) //add 1.5 at index 2
console.log(numbers)
//slice
const newNumbers = numbers.slice(1, 4) //create a new array from index 1 to index 4 (not include index 4)
console.log(newNumbers)
//fill
numbers.fill(9, 3, 5) //fill 9 from index 3 to index 5 (not include index 5)
console.log(numbers)

//practice
//1. Use .reduce() to calculate total quantity from this cart:
const cart = [
  { product: "Pen", quantity: 3 },
  { product: "Notebook", quantity: 5 },
  { product: "Eraser", quantity: 2 }
];
//expected output: 10
const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
console.log(totalQuantity); // Output: 10

//2. Use .reduce() to find the product with the highest price:
const products = [
  { name: "Keyboard", price: 800 },
  { name: "Monitor", price: 3000 },
  { name: "Mouse", price: 400 }
];
//expected output: { name: "Monitor", price: 3000 }
const mostExpensiveProduct = products.reduce((prev, curr) => (prev.price > curr.price) ? prev : curr);
console.log(mostExpensiveProduct); // Output: { name: "Monitor", price: 3000 }