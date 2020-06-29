function tests(test1, test2) {
  
  let greater = test1 > test1 ? test1 : test2; // an if condition saying if test1 is greater than test2 then taken on test1 or otherwise
  
  console.log(greater);// print out the value that is greater
 
  return greater; // return the value that is greater for use in the next function
}

// defining a fuction coursework
function coursework(cswork) {
// assigning values to coursework by summing cswork with the value greater that will haave been returned
  let coursework = cswork + tests(80, 80);
  // print out coarsework
  console.log(coursework);
  // return the value of coarsework for the next step
  return coursework;
}

// defining a function by giving it a name avg and the argument a
function avg(a) {
 // assigning values to avg
  let avg = coursework(90) / a;
  // print out the values of avg
 console.log(avg)
 // return the values of avg for the next step
  return avg;
}

// defining a function
function crsmark(a) {
 //assigning values to exm
  let exm = avg(2) * (a / 100);
  //print the value of exm
  console.log(exm);
  // return the value of exm for the next step
  return exm;
}

// defining a function
function exam(a) {
  // assigning values to the fexam
  let fexam = (60 / 100) * a;
  // print the values of fexam
console.log(fexam);
// return the values of fexam for the next step
  return fexam;
}
// defining a fuction
function fnalCrsMrk() {
// assigning a value to a function
  let fmark = exam(75) + crsmark(40);
// printing out a value 
  console.log(fmark);
}
fnalCrsMrk(); // calling or invoking a function
