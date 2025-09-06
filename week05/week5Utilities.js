function echo(msg) {
    return msg
}

function getLenght(str){
    return str.length
}

const GPAAverage = 3.0

class Book {
    constructor(isbn){
        this.isbn = isbn
    }
}

export { echo, getLenght as default, GPAAverage, Book}

//module.exports = { echo, getLenght }