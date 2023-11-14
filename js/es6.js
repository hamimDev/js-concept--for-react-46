
// template string
const numbers = [23,56,45,36,15,25];

const student = {
    name : 'khallu khan',
    age : 32,
    movies : ['king khan', 'den the day'] 
}

const about = `My name is ${student.name} and age of: ${student.age} the number is:${numbers[2]}. The movie is: ${student.movies[1]}`;

// console.log(about);

// 2. arrow Function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x+y+z;
const maltyLine = () =>{

    return
}
const maltyLineWithParameter = (num1,num2,num3) =>{
    const allNumbers = num1+num2+num3;
    return allNumbers
}


// spread Operator,

const numbers2 = [...numbers, 12,45,32,63,23,45];
console.log(numbers2);