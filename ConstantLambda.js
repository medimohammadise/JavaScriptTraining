/*const factor={value:2};
const numbers=[1,2,3];
const product=e=>e*factor.value;
factor.value=0;   //protected by freez
numbers.map(product).forEach(e=>console.log(e));*/

const factor={value:2};
const numbers=[1,2,3];
const product=e=>e*factor.value;
//will raise error
factor={value:0};  //protected by const
numbers.map(product).forEach(e=>console.log(e));


//Freez protect the object from changing but const rpotect reference