const numbers=[1,7,9,18,33,45,10,2,30,60,333];

const oddNumbers=numbers.filter(number => number % 2 === 0).length ?? 0;
const evenNumbers=numbers.filter(number => number % 2 !== 0).length ?? 0 ;

console.log(oddNumbers);
console.log(evenNumbers);

