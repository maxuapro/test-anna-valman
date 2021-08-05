import { testData4 } from '../data.js'


const array_contains = (arr, strRegExp) => {

    const [reg, flags] = strRegExp.split('/').splice(1, 2)
    const regexp = new RegExp(reg, flags)

    return arr.every(el => !regexp.test(el)) ? false : true
}

let result = array_contains(testData4, '/^raf.*/i') // true
let result2 = array_contains(testData4, '/^azaza.*/i') // false

console.log(result)
console.log(result2)