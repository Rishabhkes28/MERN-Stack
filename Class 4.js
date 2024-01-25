//Function declaration
function run(){
   console.log('running')
}

 run();

//hoisting - process of moving function declaration to the top of the file.

//function Assignment
 let stand = function walk(){
//    console.log('walking');
 };

 stand();

// function sum (a,b){
     let total =0;
     for(let value of arguments)
     total = total + value;
 return total;


// let ans= sum(1,2,3,4);
 console.log(ans);

//Rest Operator
function sum(num,value,...args){
   console.log(args);
}

sum(1,2,3,4,5)

//Default Parameter
 function interest(p,r=10,y=15 ){
   return p*r*y/100;
 }
console.log(interest(100,10,5));

// Getter setter

//getter -> access properties
//setter -> change or mutate properties

let person ={
   fName : 'Rishabh',
   lName : 'Keshari',
   get fullName() {
      return `${person.fName} ++++++ ${person.lName}`;
   },
   set fullName(value) {
      let parts = value.split(' ');
      this.fName = parts[0];
      this.lName = parts[1];
   }
} ;
person.fullName = 'harshit Jaiwal'
console.log(person.fullName);

function fullName() {
   return `${person.fName} ++++++ ${person.lName}`;
}

console.log(fullName());

//try and catch  block
try {
   person.fullName = 1;
}
catch (e) {
   alert ('you have sent number instead of names');
}
console.log(person.fullName);



