//function stud1()
let studentmarks = [];
 for(i=0;i<=10;i++) {
    parseFloat(prompt('Enter the score of students {i}:'));
    while (isNan(score) || score < 0 || score > 100){
        parseFloat(prompt('Invalid input. Please enter a score between 0 to 100 for student {i}:'));
    }
 }
 let percentage = (score/100)*100;
 studentmarks.push(percentage);
 for (i=0; i<=studentmarks.length; i++){
    console.log(`Students ${i +1}': ${Studentsmarks[i]}%`);
 }

// console.log(marks);
