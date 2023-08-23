var hour = new Date().getHours()
console.log(`Now its exactly ${hour} oclock`)
if (hour < 12){
    console.log('Good morning')
} else if(hour < 19) {
    console.log(`Good afternoon`)
} else {
    console.log(`Good night`)
}
