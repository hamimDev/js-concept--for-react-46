// 1.Array Destructuring
const numbers = [42,55];
// const [x , y] = [42,55];

const [x , y] = numbers;


function towParameter(num1, num2){
    const nums= [num1,num2];
    return nums;
}

const [second,first] = towParameter(12,13);

const student = {
    name : 'khallu khan',
    age : 32,
    movies : ['king khan', 'den the day'] 
}

const[first1, second1] = student.movies

// console.log(second1, first1);

// const {name,age} = {name: 'alu', age: 14}

const{id,salary,home,name,age} = {id: 7, name:'Hamim', age:20, salary:50000, home:'Barishal'};

console.log(id ,name,salary,home,age)
