function sum(...input) {
    console.log(...input)
    let total = 0
    for (let i of input) {
        total += i
    }
    console.log(total)

}
array = [1, 2, 3, 4, 5]
sum(...array)
    // sum([1, 2, 3, 4, 5])



