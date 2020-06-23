// Declaring a function holding two parameters
function tests(test1, test2) {
  // Assigning conditional statement to variable
  let greater = test1 > test1 ? test1 : test2;
// Returning result of expression  
  return greater;
}

// Declaring a function 
function coursework(cswork) {
// Assigning expression to variable
  let coursework = cswork + tests(80, 80);
  // Outputing on console
  console.log(coursework);
  // Returning result of expression
  return coursework;
}

// Declaring a function
function avg(a) {
 // Assigning expression to variable
  let avg = coursework(90) / a;
 // Returning result of expression
  return avg;
}

// Declaring a function
function crsmark(a) {
 // Assigning expression to variable
  let exm = avg(2) * (a / 100);
  // Returning result of expression
  return exm;
}
// Declaring a function
function exam(a) {
// Assigning expression to variable
  let fexam = (60 / 100) * a;
// Returning result of expression
  return fexam;
}
// Declaring a variable
function fnalCrsMrk() {
// Assigning expression to variable
  let fmark = exam(75) + crsmark(40);
// Outputing on console
  console.log(fmark);
}
fnalCrsMrk();
