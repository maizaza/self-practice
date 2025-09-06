//week1 arrays, functions and objects
//compare objects
const obj1 = { name: "Alice", age: 25 };
let obj2 = ["Alice", 25];
obj2[1] = "Mai" // const but still can mutate arrays value
//obj2 = obj1 // cannot reassign variable obj2 to other value if it is const
obj2 = obj1 // now both obj1 and obj2 point to the same object in memory
console.log(obj1 === obj2); // true
console.log("it is the same")

let obj3 = { name: "Alice", age: 25 };
let obj4 = { name: "Alice", age: 25 };
// even though obj3 and obj4 have the same properties and values, they are different objects in memory
console.log(obj3 === obj4); // false
console.log("it is not the same")

const arr = ['hello', 1, true]
//2. print array size
console.log(arr.length) // 3
//3. access array element
console.log(arr[0]) // hello
console.log(arr[1]) // 1
console.log(arr[2]) // true
//4 print last element
console.log(arr[arr.length - 1]) // true
//5 add two more items at the end of array with object and array data type respectively
//040
arr.push({name: "Mai"}, [1, 2, 3]) // using push method
arr[arr.length+1] = "new item" // another way to add item at the end of array
console.log(arr) // ['hello', 1, true, {name: "Mai"}, [1, 2, 3]]
//6. print every items in array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// no index access for read only
for (let item of arr) {
    console.log(item)
}

//7. shrink array with any operation
arr.pop() // remove last item
arr.length = 2 // set length to 2
console.log(arr) // ['hello', 1]

//8. apply spread on string variable
let name = "mai"
const nameSpread = [...name]
console.log(nameSpread) // ['m', 'a', 'i']

//9. create array with new constructor
const arr1 = new Array() // empty array
const arr2 = new Array(3) // array with 3 empty slots
const arr3 = new Array(1, 2, 3) // array with 3 elements
console.log(arr1) // []
console.log(arr2) // [ <3 empty items> ]
console.log(arr3) // [1, 2, 3]

const arr4 = Array.of(5) // array with single element 5
console.log(arr4) // [5]
const arr5 = Array.from(arr4) // create a shallow copy of arr4
console.log(arr5) // [5]
const name2 = Array.from(name)
console.log(name2) // ['m', 'a', 'i']

const [a, ,...b] = [1, 2, 3, 4, 5] // destructuring with rest
console.log(a) // 1
console.log(b) // [3, 4, 5]
console.log(typeof a) // number
console.log(typeof b) // object (array is a type of object)

//iterate array with index of each array element
let letters = [..."Hello World"]
let value = ''
for (let index in letters) {
    value += letters[index]
}
console.log(value) // Hello World