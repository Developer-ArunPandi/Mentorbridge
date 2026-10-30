const alphabets=["a","r","u","n","p","a","n","d","i"];

let left=0;
let right=alphabets.length-1;

while(left < right){
    temp=alphabets[left];
    alphabets[left]=alphabets[right];
    alphabets[right]=temp;
    left++;
    right--;
}

console.log(alphabets);