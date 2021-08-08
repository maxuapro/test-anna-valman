import { testData, testData2 } from '../data.js'


// return unique vals, and... not objects??

const array_unique = arr => {

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    return arr.filter(unique)
}



let result = array_unique(testData.concat(testData2))
// [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

console.log(result)