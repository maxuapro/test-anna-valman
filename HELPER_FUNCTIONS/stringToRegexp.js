// helps to turn stringified Regexp into actual Regexp
// returns array in a format:
// [ regular expression, flags ]

export const stringToRegexp = str => {
    if (!str.startsWith('/')) {
        return [str, '']
    }
    if (str.startsWith('/') && str.lastIndexOf('/') < 1) {
        return [str, '']
    }
    return [
        str.slice(1, str.lastIndexOf('/')),
        str.slice(str.lastIndexOf('/') + 1, 100)
    ]
}

// console.log(stringToRegexp('/^raf.*/i'))