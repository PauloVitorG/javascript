let now = new Date()
let wekday = now.getDay()

/* 
    0 =  Sunday
    1 = Monday
    2 = Tuesday
    3 = Wednesday
    4 = Thursday
    5 = Friday
    6 = Saturday
*/

switch(wekday) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5: 
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERROR] ivalid day')
        break // break picional no default
}


