const texts = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const json = JSON.parse(texts);

const mylist = json.list;

let spi = [];

for (let i = 0; i < mylist.length; i++) {
  spi[i] = {name: mylist[i].name, age: Number(mylist[i].age), prof: mylist[i].prof}
}

let result = {
  list: spi
}

console.log(result)