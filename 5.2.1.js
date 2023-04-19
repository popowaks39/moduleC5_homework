const texts = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const dom = new DOMParser();

const isx = dom.parseFromString(texts, "text/xml");

const mylist = isx.querySelector("list");
const mystudent = mylist.getElementsByTagName("student");

let spi = [];

for (let i = 0; i < mystudent.length; i++) {
	const sname = mystudent[i].querySelector("name");
	const slang = sname.getAttribute("lang");
	const sfirst = mystudent[i].querySelector("first");
	const ssecond = mystudent[i].querySelector("second");
	const sage = mystudent[i].querySelector("age");
	const sprof = mystudent[i].querySelector("prof");
  
	spi[i] = {name: sfirst.textContent + " " + ssecond.textContent, age: Number(sage.textContent), prof: sprof.textContent, lang: slang};
}

result = {
  list: spi
}

console.log(result)