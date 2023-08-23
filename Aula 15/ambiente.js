let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`The array have ${num.length} positions`)
console.log(`The firts value of the array is ${num[0]}`)
let pos = num.indexOf(8)
if (pos < 0) {
    console.log("Value not found")
} else {
    console.log(`The value is on position ${pos}`)
}