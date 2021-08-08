let a = [
    [10],
    {
        name: "Vasya",
        email: "vasya@example.com",
        age: 20,
        skills: {
            php: 0,
            js: -1,
            madness: 10,
            rage: 10
        },
        ert: [10, 10, [10]]
    }]

let b = [123, 123, 123, [123, 132]]

let c = 'ertert'



let lookingFor = 10

const recFunc = (obj, outobj = [], pathLine = []) => {

    const returnCorrect = str => {
        if (isNaN(str)) {
            return `.${str}`
        }
        return `[${str}]`
    }

    for (let el in obj) {

        if (typeof obj[el] === 'object') {

            pathLine.push(returnCorrect(el))

            recFunc(obj[el], outobj, pathLine)
        } else if (obj[el] === lookingFor) {

            pathLine.push(returnCorrect(el))

            let theCorrectPathLine = pathLine.join('').startsWith('.') // if dot appears at the beginning of the line
                ? pathLine.join('').slice(1, 500) // get rid of it
                : pathLine.join('') // or do nothing if it doesn't

            outobj.push([theCorrectPathLine, obj[el]])
            pathLine.pop()
        } else {
            // console.log('--->>')
        }
    }
    pathLine.pop()
    return outobj
}

console.log(recFunc(a))