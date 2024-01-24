//Copying an array
 let number = [1,2,3,4,5,6,7];
 let number1 = [8,9,10,11];

 let combine = number.concat(number1);
 console.log(combine);

 //Slicing an array
 let number3 = [1,2,3,4,5,6,7];
 let sliced= number.slice(2,5);
 console.log(sliced);

// Spread operator also used for combining
 let number2 = [1,2,3,4,5,6,7];
 let number0 = [8,9,10,11];

 let combined = [...number2,...number0];
 console.log(combined);

  //copy kaesa create karu
  let another = [...combined];

 //Iterating an array by for of loop
 let arr =[10,20,30,40];

  for (let value of arr){
   console.log(value)
 }

//Iterating by for each loop

arr.forEach (number => console.log(number));

//Joining arrays
let numbers =[10,20,30,40,50];
const joined1 = numbers.join(',');

console.log(numbers);

//Splitting array
let message = ("this is my first message");
let parts = message.split(' ');
console.log(parts);

 let joined = parts.join('_');
 console.log(joined);

 //Sorting an array
 let num =[10,30,80,50,90];
 num.sort();
 console.log(num);

 //filtering arrays
 let number4 =[1,2,-2,-4,6];
let filtered = number4.filter(value => value >=0);
console.log(filtered); 

//Mapping Arrays
let array =[1,2,3,4,5,6,7,88,9];

let items =array.map(value => 'student_no' + value);
console.log(items);

//Mapping with object
let number6 =[1,2,-6,-5]
let filtered1 = numbers.filter(value => value >=0);

let items1 = filtered1.map(num => {value: num});

console.log(items);

