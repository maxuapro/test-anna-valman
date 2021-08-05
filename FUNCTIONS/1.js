import { testData } from "../data.js"


function array_find(arr, search) {
    let reg
    let flags

    let mysearch = search.toString() // just in case of using actual regex instead of stringified one..


    if (mysearch.startsWith('/')) {
        [reg, flags] = mysearch.split('/').splice(1, 2)
    } else {
        [reg, flags] = [mysearch, '']
    }

    const regex = new RegExp(reg, flags)
    const output = []
    for (let el of arr) {
        if (regex.test(el)) {
            output.push(el)
        }

    }
    return output
}

let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

console.log(result)
console.log(result2)