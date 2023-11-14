const products = [
    {name:'phone', price: 32000, brand: 'Samsung', color:'blue'},
    {name:'phone', price: 52000, brand: 'Hp', color:'gray'},
    {name:'Tab', price: 20000, brand: 'Apple', color:'black'},
    {name:'Smart Watch', price: 3200, brand: 'master copy', color:'blue'},
]

const brands = products.map(x => x.brand);

const phone = products.filter(x => x.name === 'phone');
const findPhone = products.find(x => x.name === 'phone');
console.log(findPhone);