const numberArray=[2,5,7,8,9,25,66,99,186,200]

 let smallestNumber = numberArray[0]  ;
 let largestNumber  = numberArray[0]  ;

for(let i=0;i<numberArray.length;i++){
    smallestNumber=Math.min(smallestNumber,numberArray[i]);
    largestNumber=Math.max(largestNumber,numberArray[i]);
}

console.log(`SmallestNumber : ${smallestNumber ?? 0}` );
console.log(`LargestNumber : ${largestNumber ?? 0}`);
 