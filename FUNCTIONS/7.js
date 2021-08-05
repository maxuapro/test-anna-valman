import { testData4 } from '../data.js'
import { stringToRegexp } from '../HELPER_FUNCTIONS/stringToRegexp.js'
import { array_get } from './6.js'


const array_search = (arr, search, path = '') => {

    const [reg, flags] = stringToRegexp(search)
    const regex = new RegExp(reg, flags)
    let objectForSearch = {}

    if (path) {
        objectForSearch = array_get(arr, path)
        // console.log(objectForSearch)
    } else {
        objectForSearch = arr
    }

    const recursiveSearch = (obj, outobj = [], pathLine = []) => {

        const returnCorrect = str => {
            if (isNaN(str)) {
                return `.${str}`
            }
            return `[${str}]`
        }

        for (let el in obj) {

            if (typeof obj[el] === 'object') {

                pathLine.push(returnCorrect(el))

                recursiveSearch(obj[el], outobj, pathLine)
            } else if (regex.test(obj[el])) {

                pathLine.push(returnCorrect(el))

                outobj.push([path + pathLine.join(''), obj[el]])
                pathLine.pop()
            } else {

            }
        }
        pathLine.pop()
        return outobj
    }
    return recursiveSearch(objectForSearch)
}

let result = array_search(testData4, '/^raf.*/i') // REGEXP IS FROM YOUR DATA NOT PERFECT HERE, IT TARGETS EMAILS AS WELL !!
// [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
let result2 = array_search(testData4, '/^raf.*/i', '[17][0][0][0]')
// [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]

console.log(result)
console.log(result2)