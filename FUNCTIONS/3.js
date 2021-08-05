import { testData2 } from '../data.js'

const array_chunk = (arr, divider) => {
    const newArr = []
    for (let i = 0; i < arr.length; i += divider) {
        newArr.push(arr.slice(i, i + divider))
    }
    return newArr
}

let result = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]

console.log(result)