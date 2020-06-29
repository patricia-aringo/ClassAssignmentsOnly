// Function tests is declared with two parameters test1 and test2
function tests(test1, test2) {
  // Variable greater is declared and the tenary operator is used to asign it with a value
  let greater = test1 > test1 ? test1 : test2;
  // The statement above will return an error because the values being compared before the ternary operator are the same.
  return greater;
}

// Function coursework is declared with the argument cswork.
function coursework(cswork) {
/* The variable coursework is declared and assigned with the sum of the argument passed to the function coursework
    and the result of invoking the function tests with arguments 80 and 80*/
  let coursework = cswork + tests(80, 80);
  // This prints the variable coursework in the console.
  console.log(coursework);

    // This returns the value of the coursework variable in the defined function.
  return coursework;
}

// Function avg is declared and assigned the parameter a.
function avg(a) {
 /* Variable avg is declared in the function definition and is assigned to the result of 
    the value of invoking function coursework with argument 90 divided by the parameter of function avg. */
  let avg = coursework(90) / a;
 // This returns the value of avg variable in the defined function.
  return avg;
}

// Function crsmark is declared with parameter a.
function crsmark(a) {
 /* variable exm is declared and assigned to the result from multiplication of the value from function 
   avg with argument 2 and the value of the function crsmark parameter divided by 100.*/ 
  let exm = avg(2) * (a / 100);
  // This prints the value of variable exm in the defined function. 
  return exm;
}

// Function exam is declared with parameter a.
function exam(a) {
  /* variable fexam is declared and assigned to the result from multiplication of the value from 60/100 and
    the parameter of the function exam. */ 
  let fexam = (60 / 100) * a;
    // This prints the value of the variable fexam in the defined function.
  return fexam;
}

// Function fnalCrsMrk is declared.
function fnalCrsMrk() {

  /* variable fmark is declared in the function definition and is assigned to the sum of the values
    from invoking functions exam with argument 75 and function crsmark with argument 40. */ 
  let fmark = exam(75) + crsmark(40);
 // This will print the variable fmark in the console. 
  console.log(fmark);
}// The function fnalCrsMrk is invoked. 
fnalCrsMrk();
