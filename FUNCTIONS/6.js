import { testData4 } from '../data.js'


export const array_get = (arr, str) => {

    const splitByDots = str.split('.')
    const pathArray = []

    for (let el of splitByDots) {
        if (el.startsWith('[')){
            pathArray.push(...el.split(/[^a-z0-9]+/).slice(1, -1))
        } else {
            pathArray.push(el)
        }
    }

    const goThere = (initialArray, arrayOfKeys) => {
        let res = initialArray
        for (let el of arrayOfKeys) {
            res = res[el]
        }
        return res
    }

    return goThere(arr, pathArray)
}


// let result = array_get(testData4, '[5].name') // "Rafshan"
// let result2 = array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
// let result3 = array_get(testData4, '[17][0][0][0][11][0][name]') // "Rafshan"

// console.log(result)
// console.log(result2)
// console.log(result3)