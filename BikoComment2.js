//Define a function named tests with parameters test1 and test2
function tests(test1, test2) {
  /*Declare a variable named greater and initialize it with the value
  of test1 if it is greater than test2 or else initialize it with the
  value of test2.
  */
    let greater = test1 > test1 ? test1 : test2; //There is an error as test1 can not be greater than itself
   /*Return the value of greater at the end of the function. This way
   it can be used in other functions
   */
    return greater;
  }
  
  //Define a function named coursework with one parameter cswork
  function coursework(cswork) {
  /*Declare a variable coursework and intialize it to the sum of 
  cswork and the result of tests function with parameters
  80 in test1 and 80 in test2
  */
    let coursework = cswork + tests(80, 80);
  //Print to the console the value of coursework variable  
    console.log(coursework);
    //Return the value of coursework at the close of the function
    return coursework;
  }
  
  //Define a function named avg with parameter a
  function avg(a) {
   /*Declare a variable avg and intialize it with the value of the result 
   from the coursework function divided by the argument in the function avg
   */
    let avg = coursework(90) / a;
   //return the value of avg at the end of running the avg function 
    return avg;
  }
  
  //Define a function crsmark with a parameter a
  function crsmark(a) {
   /*Declare a variable exm and initialize it to the result of the function
   avg with argument 2 multiplied by the parameter divided by 100
   */
    let exm = avg(2) * (a / 100);
    //Return the value of exm at the end of the function crsmark
    return exm;
  }
  //Define a function named exam with a parameter a
  function exam(a) {
    /*Declare a variable fexam and initialize it with the value of 60 percent 
    of the argument a
    */
    let fexam = (60 / 100) * a;
  //Return the value of fexam at the end of the function exam()
    return fexam;
  }
  //Define a function fnalCrsMrk
  function fnalCrsMrk() {
  /*Declare a variable fmark and initialize it to the sum of the 
  output of the exam function with argument 75 and output of crsmark
  function with argument 40
  */ 
    let fmark = exam(75) + crsmark(40);
  //Print out to the console the value of fmark
    console.log(fmark);
  }
  //call the fnalCrsMrk() function
  fnalCrsMrk();