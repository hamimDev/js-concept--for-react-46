const person = {name:'Hamim', age:20, work:'web developer', salary:50000};

const personStringify = JSON.stringify(person);

const personObject = JSON.parse(personStringify);

// console.log(personStringify);
// console.log(personObject);


// 2.fetch

// fetch('url')
//   .then(res => res.json())
//   .then(data =>console.log(data));

const keys = Object.keys(person);
const values = Object.values(person);

// console.log(keys,values);

// 3.for

const numbers =[12,23,56,45,78,995,65,525,54];
// numbers.forEach(num => console.log(num));

const number = numbers.map(x => x*2);
console.log(number);