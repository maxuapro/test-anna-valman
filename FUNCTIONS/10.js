import { testData3 } from "../data.js"


const array_pluck = (arr, str) => {

    const pathArray = str.split('.')     // we got an array of N len

    const goThere = (obj, array) => {    // and we use that array
        let res = obj                    // with the help of additional var
        for (let el of array) {          // to loop through the array going deeper into nesting
            res = res[el]
        }
        return res
    }

    return arr.map(el => goThere(el, pathArray))
}



let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]



console.log(result)
console.log(result2)
