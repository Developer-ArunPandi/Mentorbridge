const numbers = [2, 5, 8, 10, 18, 33, 45];

let left=0;
let right=numbers.length-1;

while(left < right){
    temp=numbers[left];
    numbers[left]=numbers[right];
    numbers[right]=temp;
    left++;
    right--;
}

console.log(numbers);
