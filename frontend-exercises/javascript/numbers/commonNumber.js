const firstArray=[1,7,8,18,33];
const secondArray=[1,2,7,8,10,];

const set1=new Set(firstArray);
const set2=new Set(secondArray);

const commonNumbers=set1.intersection(set2);

console.log([...commonNumbers]);


