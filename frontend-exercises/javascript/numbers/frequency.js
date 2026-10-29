const numbers=[1,2,5,6,7,8,9,2,2,2,2,5,5,8,33,35,45,33];

const frequencyMap=new Map();

for(const number of numbers){
    frequencyMap.set(number,(frequencyMap.get(number) ?? 0)+1);
}

console.log(frequencyMap);
