
console.log('Testing');

//arguments object - no longer bound with arrow function
//ES5 with arguments object
const add = function (a,b){
    console.log(arguments);
    
    return a + b;
}
const add2 = (a,b) => {
    //console.log(arguments);
    return a + b;
    
}

console.log('Sum2 is: ', add2(99,1));
    

console.log('The sum is: ', add(5,3));



const user = {
    name: 'Cyngynn',
    cities: ['Baguio', 'Dubai', 'Manaoag'],
    //ES5
    // placesLived: function () {
    //ES6
    placesLived(){
        console.log(this.name);
        console.log(this.cities);
        //this key word no longer bound on es6
        //es5 function
        /*
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);   
        });
        */
        //ES6 arrow v1 traditional
        /*this.cities.forEach((city)=>{
            console.log(this.name + ' has lived in ' + city + '.');   
        });*/
        //ES V2  with map
        /*const cityMessage = this.cities.map((city)=>{
            return this.name + ' has lived in ' + city;
        });

        return cityMessage;
        */
       //ES6 v3
       /*return this.cities.map((city) => {
           return this.name + ' has lived in ' + city;
       });
       */
      //ES6 V4
       return this.cities.map((city)=> this.name + ' has lived in ' + city);
        
     }
}
console.log(user.placesLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
    console.log(this.numbers);
    return this.numbers.map((number) => this.multiplyBy * number );
    }
}

console.log(multiplier.multiply());
