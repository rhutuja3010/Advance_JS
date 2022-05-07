const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element == 44;

console.log(array1.findIndex(isLargeNumber));
// expected output: 4
