let str = 'Rafshan'
let rrr = "/^raf.*/ig"

let arr = []
let forregex = ''
let flags = ''

if (rrr.startsWith('/')) {
    arr = rrr.split('/')
}

console.log(arr)


let reg = new RegExp(arr[1], arr[2])
console.log('-->', reg, reg.test(str))

// console.log(str.test("Rafshan"))