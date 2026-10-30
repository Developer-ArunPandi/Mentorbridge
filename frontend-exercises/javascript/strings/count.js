const fruits=["mango","graps","apple","orange","apple","mango","mango"];

const map=new Map();

for(const fruit of fruits){
    map.set(fruit,(map.get(fruit) ?? 0) + 1);
}

console.log(map);
