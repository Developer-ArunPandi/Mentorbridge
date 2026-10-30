const devices = [
  "TV",
  "Computer",
  "Keyboard",
  "Mouse",
  "Smart Phone",
  "Smart Watch",
];

let smallest = Infinity;
let largest = -Infinity;
let largestElement = null;
let smallestElement = null;

if (devices.length === 0) {
   console.log("Array is Empty");
    return ;
} else {
  for (const device of devices) {
    let devicelenght = device.length;
    if (devicelenght > largest) {
      largest = devicelenght;
      largestElement = device;
    }
    if (devicelenght < smallest) {
      smallest = devicelenght;
      smallestElement = device;
    }
  }
}
console.log(`Smallest String : ${smallestElement}`);
console.log(`Largest String : ${largestElement}`);
