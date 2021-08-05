import { testData4 } from '../data.js'

// I DID NOT FINISHED THIS ONE YET 😞

// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}


const array_normalize = (arr, schema, transform = false) => {

    let out = []
    let actualType
    let condition = () => { }

    if (typeof schema === 'object') {
        actualType = 'object'
    } else {
        actualType = schema
    }

    switch (actualType) {

        case 'string':
            condition = val => {
                return typeof val === 'string'
            }
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
            condition = val => {
                if (typeof val !== 'number'){
                    return false
                }
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

        case 'array':
            condition = val => {
                return Array.isArray(val)
            }
            break
        
        case 'object':
            condition = val => {
                return Object.keys(object1)
            }


    }





    const addValue = (val) => {
        out.push(val)
    }

    for (let el of arr) {

        if (condition(el)) {
            addValue(el)
        }
    }
    return out
}


let result = array_normalize(testData4, 'float')
// ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, { age: 'float' }) // []
// let result4 = array_normalize(testData4, { age: 'float' }, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

//-----
console.log(result)