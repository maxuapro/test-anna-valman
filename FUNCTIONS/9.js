import { testData4 } from '../data.js'

// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}


const array_normalize = (arr, schema, transform = false) => {

    // transform ? add convertable ones!

    let out = []
    let condition = () => { }
    let valueReturn = val => val
    let convert = val => val

    // making a condition
    const getCondition = str => {
        switch (str) {

            case 'string': // convert
                condition = transform
                    ? val => { return typeof val === 'string' || typeof val === 'number' }
                    : val => { return typeof val === 'string' }
                convert = transform ? val => val.toString() : convert
                break

            case 'number':
                condition = val => {
                    return typeof val === 'number'
                }
                break

            case 'int':
                condition = val => {
                    return Number.isInteger(val)
                }
                break

            case 'float':
                condition = transform
                    ? val => {
                        if (typeof val !== 'number') { return false }
                        return val % 1 !== 0 || typeof val === 'number'
                    }
                    : val => {
                        if (typeof val !== 'number') { return false }
                        return val % 1 !== 0
                    }
                break

            case 'bool':
                condition = val => {
                    return typeof val === 'boolean'
                }
                break

            case 'function':
                condition = val => {
                    return typeof val === 'function'
                }
                break
        }
    }

    if (typeof schema === 'object') {

        const theKey = Object.keys(schema)[0]
        const theTypeForSearch = schema[theKey]

        valueReturn = obj => {
            return obj.hasOwnProperty(theKey) ? obj[theKey] : undefined
        }

        getCondition(theTypeForSearch)

        convert = (val, ert = theKey) => {
            return { [ert]: val[ert] }
        }

    } else {
        getCondition(schema)
    }

    for (let el of arr) {
        if (condition(valueReturn(el))) {
            out.push(convert(el))
        }
    }
    return out
}


// let result = array_normalize(testData4, 'string')
// ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, { age: 'float' }) // []
let result4 = array_normalize(testData4, { age: 'float' }, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

//-----
// console.log(result)
// console.log(result2)
console.log(result3)
console.log(result4)