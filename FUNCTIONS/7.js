import { testData4 } from '../data.js'
import { stringToRegexp } from '../HELPER_FUNCTIONS/stringToRegexp.js'
import { array_get } from './6.js'


const array_search = (arr, search, path = '') => {

    const [reg, flags] = stringToRegexp(search)
    const regex = new RegExp(reg, flags)

    const objectForSearch = path ? array_get(arr, path) : arr

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

                const theCorrectPathLine = pathLine.join('').startsWith('.') // if dot appears at the beginning of the line
                    ? pathLine.join('').slice(1, 500) // get rid of it
                    : pathLine.join('') // or leave it as it is if it doesn't

                outobj.push([path + theCorrectPathLine, obj[el]])
                pathLine.pop()
            } else {
                // do nothing
            }
        }
        pathLine.pop()
        return outobj
    }
    return recursiveSearch(objectForSearch)
}

// REGEXP IS FROM YOUR DATA NOT PERFECT HERE, IT TARGETS EMAILS AS WELL !!!

let result = array_search(testData4, '/^raf.*/i')
// [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
let result2 = array_search(testData4, '/^raf.*/i', '[17][0][0][0]')
// [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]

console.log(result)
console.log(result2)