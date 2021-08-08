

const array_fill = (number, value) => {
    return new Array(number).fill(value)
}


let result = array_fill(5, 'string')
// ['string', 'string', 'string', 'string', 'string']

console.log(result)