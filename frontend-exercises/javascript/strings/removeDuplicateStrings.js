const names=["arun","vijay","santhosh","shafeeq","yuvaraj","ARUN","VIJAY","SANTHOSH"];

const convertedNames=names.map(name => name.toLowerCase());
const map=new Map();
const duplicates=[];

for(const name of convertedNames){
    let count=(map.get(name)??0)+1;
    map.set(name,count);
    if(count > 1) {
        duplicates.push(name);
    }
  }

console.log(duplicates);