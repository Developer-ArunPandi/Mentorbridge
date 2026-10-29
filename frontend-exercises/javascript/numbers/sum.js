const numberArray = [2, 5, 8, 3, 1];

const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Sum : ${sum}`);