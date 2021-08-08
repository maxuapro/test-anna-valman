let a = [1, 1, 1, 1, 1, 1, 1, 11]


function Collection(arr) {
    this.arr = arr
    this.make = function(arr){
        this.arr = [...arr]
        return this.arr
    }
}

// map
Collection.prototype.map = function (callback) {
    const retArray = [...this.arr]
    return retArray.map(el => callback(el))
}


let newArr = new Collection(a)


// callback
const addOne = el => {
    return el + 1
}

console.log(a)
