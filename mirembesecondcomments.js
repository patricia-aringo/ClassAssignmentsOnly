//declaring a function that will allow two parameters test1 and test2
function tests(test1, test2) {
  // declaring the variable greater and assigning it to if test1 is greater that test2 , if it is true then print test1 else print test2
  let greater = test1 > test1 ? test1 : test2;
 
  //it will return the value of greater that could be passed on to other functions
  return greater;
}

//declaring a function coursework that will allow in one parameter  
function coursework(cswork) {
//declaring a variable coursework that will equal to the parameter passed (cswork) plus the value of the result of the function test when arguments 80 and 80 are passed
  let coursework = cswork + tests(80, 80);
  //print the value of coursework in the console
  console.log(coursework);
  //return the value of coursework that could be passed on to other functions
  return coursework;
}

//declaring a function coursework that will allow in one parameter 
function avg(a) {
 //declaring the variable avg and assigning it to the value of the function coursework when argument 90 is passed to it and diving the result by a parameter "a" 
  let avg = coursework(90) / a;
 //return the value of avg that could be passed on to other functions
  return avg;
}

//declare a function crsmark that will allow in one parameter
function crsmark(a) {
 //declaring the variable exm and assigning it to the value of function avg when the argument of 2 is passed multiplied by the value of a divide by 2
  let exm = avg(2) * (a / 100);
  //return the value of exm that could be passed on to other functions
  return exm;
}
//declare a function exam that will allow in one parameter
function exam(a) {
  //declaring a variable fexam and assignint it to the value of 60 divide by 100 then multipled by the variable a
  let fexam = (60 / 100) * a;
//return the value of fexam that could be passed on to other functions
  return fexam;
}
//declare a function finalCrsMrk
function fnalCrsMrk() {
  //declaring a variable fmark and assigning it to the value of exam function when the argument of 75 is passed and add it to the value of the functon crsmarks when an argument of 40 is passed

  let fmark = exam(75) + crsmark(40);
//printing the value of the value fmark in the console 
  console.log(fmark);
}
//invoking the function fnalCrsMrk
fnalCrsMrk();
