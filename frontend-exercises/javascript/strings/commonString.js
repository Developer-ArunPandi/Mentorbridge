const firstArray = ["arun", "pandi", "santhosh", "kumar", "nivas", "logu"];
const secondArray = ["ARUN", "KUMAR", "NIVAS", "PANDI"];

const lowerCaseArray1 = firstArray.map((str) => str.toLowerCase());
const lowerCaseArray2 = secondArray.map((str) => str.toLowerCase());

const set1 = new Set(lowerCaseArray1);
const set2 = new Set(lowerCaseArray2);

const commonNames = set1.intersection(set2);

console.log([...commonNames]);
