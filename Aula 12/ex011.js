let age = 70
console.log (`You are ${age} years old.`)
if (age < 16) {
    console.log(`Can't vote`)
} else if(age < 18 || age > 65) {
     console.log(`Optional Vote`)
} else {
    console.log(`Need to vote`)
}
