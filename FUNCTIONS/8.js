import { testData, testData2 } from '../data.js'

const reservedKeyWords = ['true', 'false']

const array_combine = (keys, values) => {
    let obj = {}

    for (let i = 0; i < keys.length; i++) {
        if (reservedKeyWords.indexOf(keys[i].toString()) === -1) {
            obj[keys[i]] = values[i]
        }
    }
    return JSON.stringify(obj)
}


let result = array_combine(testData, testData2)
// {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

console.log(result)