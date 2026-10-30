const devices = [
  "Smart Phone",
  "Smart Watch",
  "TV",
  "Computer",
  "Keyboard",
  "Mouse",
];

const sortedDevices = [...devices].sort((a, b) => a.length - b.length);
console.log(sortedDevices);
