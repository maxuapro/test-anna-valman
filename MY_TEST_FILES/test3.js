

function index(obj, i) {
    return obj[i]
}
let obj = { a: { b: '1', c: '2' } }
let sdf = 'a.c'.split('.').reduce(index, obj)


console.log(sdf)