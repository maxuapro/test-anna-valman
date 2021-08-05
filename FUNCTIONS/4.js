import { testData } from '../data.js'


const array_skip_until = (arr, value) => {

    return arr.indexOf(value) === -1
        ? []
        : arr.slice(arr.indexOf(value), arr.length - 1)

}

let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []


console.log(result2)
console.log(result3)