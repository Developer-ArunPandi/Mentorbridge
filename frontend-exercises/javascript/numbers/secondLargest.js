const numbers = [2, 5, 8, 10, 18, 33, 45];

let largest = numbers[0];
let secondLargest = numbers[0];

for (const number of numbers) {
  if (number > largest) {
    secondLargest = largest;
    largest = number;        
  } else if (number > secondLargest && number < largest) {
    secondLargest = number;
  }
}

console.log(secondLargest); 



