globalMy.error = function error(x,y) {
    let e = new TypeError()
    e.message = x
    e.stack = y
    throw e
};