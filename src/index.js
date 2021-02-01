module.exports = function reverse (n) {
   let a = []
   String(n > 0 ? n : -n).split('').forEach(el => a.unshift(el))
return  Number(a.join(''))
}
