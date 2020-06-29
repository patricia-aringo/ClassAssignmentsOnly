
/* Declaring the tests function parameters test 1 & test 2.
Declaring the values test 1 & test 2 to the variable greater with a condition.
Returning greater that is outcome of the condition*/
function tests(test1, test2) {

  let greater = test1 > test2 ? test1 : test2;

  return greater;
}

/*Declaring a function coursework with parameter cswork.
Declaring a variable coursework that is assigned the sum of cswork & values of the tests function returned
 */
function coursework(cswork) {

  let coursework = cswork + tests(80, 80);
//Printing the value of coursework in the console.
  console.log(coursework);
//Returning the value of the coursework.
  return coursework;
}

/*Defining a function avg with a parameter a.
Declaring a variable avg that divides the value of coursework function by a.
 */
function avg(a) {

  let avg = coursework(90) / a;
//Returning the avg
  return avg;
}

/*Defining a function crsmark with a parameter a.
Declaring a variable exm that is assigned the result of a product.
Returns the result of the product. */
function crsmark(a) {

  let exm = avg(2) * (a / 100);

  return exm;
}

/*Assigning a function exam a parameter a.
Declaring a variable fexam that is assigned the result of a product.
Returns the result of the product. */
function exam(a) {

  let fexam = (60 / 100) * a;

  return fexam;
}

/*Defining a function finalCrsMrk without any parameters.
Declaring a variable fmark that is assigned the sum got from the values of functions exam and crsmark.
Printing the result  of the varible fmark in the console.*/
function finalCrsMrk() {

  let fmark = exam(75) + crsmark(40);

  console.log(fmark);
}
//Invoking the function fnalCrsMrk.
fnalCrsMrk();