//week5 js modules
// practice before class
const studentScores = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 55 },
    { name: "Eve", score: 78 },
]
function getPassingNames(studentScores) {
    let passes = []
    studentScores.forEach(element => {
        if (element.score >= 70) {
            passes.push(element.name.toUpperCase())
        }
    });
    return passes
}

const passingNames = getPassingNames(studentScores)
console.log(passingNames)

// check is array Array.isArray(data)
console.log(Array.isArray([])) // true
console.log(Array.isArray(["a", 12, false])) //true
console.log(Array.isArray([{name: "Mai"}])) // true

console.log(Array.isArray("[]")) //false
console.log(Array.isArray(123)) //false

// merge array
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [...num1,...num2] // spread
const num4 = num1.concat(num2) // concat

console.log(num1)
console.log(num2)
console.log(num3) // [1,2,3,4,5,6]
console.log(num4) // [1,2,3,4,5,6]

// convert array to string data type
console.log(num1.toString()) // 1,2,3
console.log(num1.join(".")) // with seperator . : 1.2.3
console.log(num1.join("-")) // with seperator - : 1-2-3

//practice 2
//ผมไม้มาดูแมวที้ห้อง
// 040
const array14 = [1, 30, 4, 21, 100000]
array14.sort((a,b) => {
    return a-b
})
console.log(array14)

const students = [
    { id: 66500102, name: "Suda", gpa: 2.5 },
    { id: 66500555, name: "ada", gpa: 2.8 },
    { id: 66500589, name: "pornchai", gpa: 3.25 },
    { id: 66500102, name: "Pornsak", gpa: 3.8 },
]

students.sort((a, b) => {
    const nameA = a.name[0].toUpperCase()//.name.toLowerCase();
    const nameB = b.name[0].toUpperCase()//.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    }else if (nameA > nameB) {
        return 1;
    }
    return 0;
})
console.log("c" > "b")
console.log("ab"[0])
students.forEach(element => {
    console.log(element)
});

const { getLenght, echo } = require("./week5Utilities")
console.log(getLenght("Today is a present"))
console.log(echo("Test"))
