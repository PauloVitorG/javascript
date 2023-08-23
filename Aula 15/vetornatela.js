let values = [8, 1, 7, 4, 2, 9]

/* for (let i = 0; i < values.length; i++) {
    const element = values[i];
    console.log(element)
} */

for (const pos in values) {
    console.log(values[pos])
}