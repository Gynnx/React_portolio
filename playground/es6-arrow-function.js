console.log('Hello');
function squarenum(number) {
    return number ** 2;
    
};
 console.log(squarenum(8));


 //ES6 Arrow function
 const squareArrow =  (x) => {
     return x ** 2;
 }
 
 console.log(squareArrow(9));

 const squareArrowShort = (x) => x ** 2;

 console.log(squareArrowShort(7));
 

 const fullName = 'Jan Cyngynn';

 let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log('firstName: ', firstName );
    
}

const fullName1 = 'Anne Charmaine';
const firstName1 = (printName) => {
    return printName.split(' ')[0];
}
console.log(firstName1(fullName1));

const firstName2 = (printName1) => printName1.split(' ')[0];

console.log('firstName2: ', firstName2(fullName));




 