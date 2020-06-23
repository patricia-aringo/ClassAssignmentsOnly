// Declaring a function test with two arguments
function tests(test1, test2) {
    // Declaring a variable greater with a condition
    let greater = test1 > test1 ? test1 : test2;
    // Returning greater that is outcome of the condition
    return greater;
}
  
// Defining a function coursework with parameter cswork
function coursework(cswork) {
    // Declaring a variable coursework that is assigned the sum of cswork and values of the tests function returned
    let coursework = cswork + tests(80, 80);
    // Printing to the console the value of coursework
    console.log(coursework);
    // Returning the value of coursework
    return coursework;
}
  
//  Defining a function avg with a parameter a 
function avg(a) {
    // Declaring a variable avg that divides the value of function coursework by a
    let avg = coursework(90) / a;
    // Returns avg
    return avg;
}
  
// Defining a function crsmark with parameter a  
function crsmark(a) {
    // Declaring a variable exm that is assigned the result of a product 
    let exm = avg(2) * (a / 100);
    // Returns the result of the product
    return exm;
}
 
// Defining a function exam with parameter a
function exam(a) {
    // Declaring a variable fexam that is assigned the result of a product 
    let fexam = (60 / 100) * a;
    // Returns the result of the product
    return fexam;
}

// Defining a function without any parameters
function fnalCrsMrk() {
    // Declaring a variable fmark that is assigned the sum got from the values of functions exam and crsmark
    let fmark = exam(75) + crsmark(40);
    // Printing to the console the result of what is assigned to the variable fmark
    console.log(fmark);
}
// Invoking the function fnalCrsMrk
fnalCrsMrk();