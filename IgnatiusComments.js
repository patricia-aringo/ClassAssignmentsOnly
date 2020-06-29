//Creating a function test with two parameters test1 and test2 
function tests(test1, test2) {
  /*Creating a variable greater and assigning it to either test1 or test2 depending on
   if the condition (test1 > test1) is true or not 
   The condition is not true because test1 is not greater than test1 so test2 will be the result for greater
   */
    let greater = test1 > test1 ? test1 : test2;
//Calling the answer or the value in greater
    return greater;
  }
  //Creating function coursework with the parameter cswork
  function coursework(cswork) {
  //Creating a variable coursework and assigning to it values cswork + test(80,80) where test(80,80) == 80
    let coursework = cswork + tests(80, 80);
  //Writing the value of coursework to the console  
    console.log(coursework);
  //Invoking the value for the coursework to be used in other functions  
    return coursework;
  }
  
  //Creating a function avg with a parameter a
  function avg(a) {
  //Creating a variable avg and assigning a value from the function coursework with argument 90 divided by parameter a 
  //coursework(90) == 90 + 80 == 170  
    let avg = coursework(90) / a;
   //Preparing the answer from the variable avg to be used outside the function
    return avg;
  }
  
  //Creating a variable crsmark with the parameter a
  function crsmark(a) {
   //Creating a variable exm and assign it to the result from the function avg(2) * (a/100)
   //avg(2) outputs 170/2 == 85
    let exm = avg(2) * (a / 100);
   //Preparing the answer from the variable exm to be used in other functions
    return exm;
  }
  //Creating a function exam with parameter a
  function exam(a) {
    //Creating a variable fexam and assign (60/100)*a to it
    let fexam = (60 / 100) * a;
  //preparing the result in the variable fexam
    return fexam;
  }
  //Creating a function fnalCrsMrk
  function fnalCrsMrk() {
  //Creating a variable fmark and assign to it the functions exam(75) + crsmark(40)
  //exam(75) outputs (60/100)*75 == 45
  //crsmarks(40) outputs (170/2) * (40/100) == 34
    let fmark = exam(75) + crsmark(40);
  //Calling the result from the variable fmark to write to the console
    console.log(fmark);
  }
  //Calling the function fnalCrsMrk
  //Output of fnalCrsMrk will be 79
  fnalCrsMrk();
  