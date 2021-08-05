let a = '/^raf.*/i'

console.log(a.lastIndexOf('/'))


let [reg, flags] = [
    a.slice(1, a.lastIndexOf('/')),
    a.slice(a.lastIndexOf('/'), 100)
]

console.log(reg, flags)