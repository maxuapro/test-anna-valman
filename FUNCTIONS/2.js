import { testData, testData2 } from "../data.js"


const array_avg = (arr, skipNaN = false) => {

    let sum = 0
    let divider = 0

    for (let el of arr) {
        if (typeof el === 'number' && skipNaN) {
            sum += el
        } else if (typeof el === 'number') {
            divider++
            sum += el
        } else {
            sum += 0
        }
    }

    return skipNaN
        ? `~${Math.round(sum / arr.length)}`
        : `~${Math.round(sum / divider)}`
}


let result = array_avg(testData2) // ~265 
let result2 = array_avg(testData) // ~420
let result3 = array_avg(testData, true) // ~191

console.log(result)
console.log(result2)
console.log(result3)