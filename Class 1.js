//for( let i=0; i<=10; i++){
   // console.log(i)
//}
// function createRectangle() {
// return rectangle ={
//     length:10,
//     breath:20,

//     draw: function(){
//     console.log('drawing rectangle');
//     }
//    };
//    //return rectangle
// }

//let rectangleObj1 = createRectangle();

// function createNew(cost,prize){
// return superCar ={
//     cost,
//     prize,
//     //color: Black,

//     tyre(){
//         console.log('MRF');
//     }
// };

// }
// let superCar1 =  createNew(30,40);
// //console.log(superCar.cost);

// function SuperCar(cos,pri){
//     this.cost = cos,
//     this.prize = pri,
//     this.draw = function(){
//         console.log('Drawing');
//     }
// }

// let Supercar1 = new SuperCar(250,300);
// console.log("Hello World");

// let rectangle ={
//    length:2,
//    breath:4,

// };
// for in loop
// keys are reflected through key variable
// values are reflected through rectangle[key]
// for(let key in rectangle){
//    console.log(key,rectangle[key])
// }

//for of loop
// for(let key of Object.key(rectangle)){
//    console.log(key);
// 

// Object Cloning by Iteration
// let src ={
//    a:10,
//    b:20,
//    c:30,

// };
// let dest={};
// for (let key in src){
//    dest[key] = src[key];
// }
// console.log(dest);

// Object cloning by Assign
// let src ={
//    a:10,
//    b:20,
//    c:30,

// };
// let dest = Object.assign({},src);
// console.log(dest);

//when string show as a string
// let lastName = 'babbar';

// //When string show as a primitive data type
// let firstname = new String ('love');

// //template Literal
// let message =`This is ${lastName}
//  my first 
// message`;
// console.log(message);
 
//Date and Time
// let date = new Date()
// console.log(date);

// let date2= new Date(2003, 6, 28 ,7);
// console.log(date2);

// //Array
// let numbers =[1,3,5,4];
// console.log(numbers[2]);


// //Insertion in array at last
// numbers.push(9);
// console.log(numbers);

//Insertion of array at beginning
// numbers.unshift(0);
// console.log(numbers);

// //Insertion of array in middle
// //insertion place,deletion,insertion value
// numbers.splice(2,0,'a','b');
// console.log(numbers);

// //Finding of array 
// console.log(numbers.indexOf(3));

// //when there is no value available in array then it will always return (-1) 
// // we want to check if a number in an array
// console.log(numbers.includes(7));

//Finding an array into the object
// let course =[
//    {no:1, name:'Rishabh'},
//    {no:2, name:'Keshari'},
// ];
//console.log(course);
// let course1 = course.find(function(course){
//    return course.name ==='Rishabh';
// })
// console.log(course);

//Same thing in arrow function
//let course1 = course.find(course => course.name === 'Rishabh');
//console.log(course1);

 //garbage collector
// We have no control on garbage collector
// It will always run in BC

//Removing element in array
// let number = [1,2,3,4,5,6,7];

// //number.pop();
// number.shift();
// number.splice(3,1);

// console.log(number); 

//Emptying an array
// let number = [1,2,3,4,5,6,7];

// number.length =0;
// console.log(number); 

//Copying and slicing array
// let number = [1,2,3,4,5,6,7];
// let number1 = [8,9,10,11];

// let combine = number.concat(number1);
// console.log(combine);

// let number = [1,2,3,4,5,6,7];
// let sliced= number.slice(2,5);
// console.log(sliced);

// Spread operator also used for combining
// let number = [1,2,3,4,5,6,7];
//  let number1 = [8,9,10,11];

//  let combined = [...number,...number1];
//  console.log(combined);

//  //copy kaesa create karu
//  let another = [...combined];

 //Iterating an array by for of loop
 //let arr =[10,20,30,40];

//  for (let value of arr){
//      console.log(value)
// }

//Iterating by for each loop

//arr.forEach (number => console.log(number));

//Joining arrays
//let numbers =[10,20,30,40,50];
//const joined = numbers.join(',');

//console.log(numbers);

//Splitting array
// let message = ("this is my first message");
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// //Sorting an array
//  let num =[10,30,80,50,90];
//  num.sort();
//  console.log(num);

 //filtering arrays
//  let number =[1,2,-2,-4,6];
// let filtered = number.filter(value => value >=0);
// console.log(filtered); 

//Mapping Arrays
// let array =[1,2,3,4,5,6,7,88,9];

// let items =array.map(value => 'student_no' + value);
// console.log(items);

//Mapping with object
// let numbers =[1,2,-6,-5]
// let filtered = numbers.filter(value => value >=0);

// let items = filtered.map(num => {value: num});

// console.log(items);

//Function declaration
function run(){
   console.log('running')
}

run();
//hoisting - process of moving function declaration to the top of the file.

//function Assignment
let stand = function walk(){
   console.log('walking');
};

stand();





 





  
    

