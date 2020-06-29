// Declaring a function holding two parameters
function tests(test1, test2) {
  // Assigning conditional statement to variable
  let greater = test1 > test1 ? test1 : test2;
// Returning result of expression  
  return greater; // The function returns test1
}

// Declaring a function 
function coursework(cswork) {
// Assigning expression to variable
  let coursework = cswork + tests(80, 80);
  // Outputing on console
  console.log(coursework); // The function outputs 170 from 90 + 80
  // Returning result of expression
  return coursework; 
}

// Declaring a function
function avg(a) {
 // Assigning expression to variable
  let avg = coursework(90) / a;
 // Returning result of expression
  return avg; // The function returns 85 from 170 / 2
}

// Declaring a function
function crsmark(a) {
 // Assigning expression to variable
 let exm = avg(2) * (a / 100)
  // Returning result of expression
  return exm; // The function returns 34 from 85 * (40 / 100)
}
// Declaring a function
function exam(a) {
// Assigning expression to variable
  let fexam = (60 / 100) * a;
// Returning result of expression
  return fexam; // The function returns 45 from 0.6 * 75
}
// Declaring a variable
function fnalCrsMrk() {
// Assigning expression to variable
  let fmark = exam(75) + crsmark(40);
// Outputing on console
  console.log(fmark); 
}
// Function invoking
fnalCrsMrk(); // The function returns 79 from 45 + 34