const fruits=["mango","graps","apple","orange"];

for(const fruit of fruits){
    const map=new Map();
   for(const char of fruit){
        map.set(char,(map.get(char) ?? 0) + 1);
   }
   console.log(map);
}


