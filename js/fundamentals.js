// 1. let and const

const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. 6 basic condition: >,<,===,!==,<=,>=,;
// multiple condition: &&, ||;

if(fatherName === 'arnold' && season === 'rainy'){

}
else if(fatherName === 'Arnold' || season === 'rainy'){

}
else{

}

// 3. Array declare
// index , [0,1,2,3,4]
// length
// push and pop

const numbers = [12,14,85,52,32,63,42];

numbers[0] = 56;

// 4. for loop

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

// 5. function

function multiply(num1, num2){
    const result = num1*num2;
    return result;
}

const output = multiply(23,30);
// console.log(output);

// 6. Object

const student = {
    name : 'khallu khan',
    age : 32,
    movies : ['king khan', 'den the day'] 
}

const Age = 'age';

console.log(student.age);
console.log(student['age']);
console.log(student[Age]);
