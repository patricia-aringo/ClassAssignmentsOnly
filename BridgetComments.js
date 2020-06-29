//Function test named with parameters as test1 and test2.
function tests(test1, test2) {
    //Declaring the variable greater and assigning it values.the outcome is false
      let greater = test1 > test1 ? test1 : test2;
    //returns the value from the greater variable to be accessed by other functions.
      return greater;
    }
    //Function coursework named with parameter as cswork.
    function coursework(cswork) {
    //Declaring the variable coursework and assigning values with an operator.
      let coursework = cswork + tests(80, 80);
    //outputs the value to the console.
      console.log(coursework);
    //returns the value of coursework to be accesed by other functions.
      return coursework;
    }
    
    //Function named avg with parameter a.
    function avg(a) {
    //Declaring the variable avg and assigning values to it.
      let avg = coursework(90) / a;
    //returns the value of average to be accesed by other functions.
      return avg;
    }
    
    //Function named crsmark with parameter a.
    function crsmark(a) {
    //Declaring a variable exm and assigning values to it.
      let exm = avg(2) * (a / 100);
    //returns the value of exm to be accesed by the other function. 
      return exm;
    }
    //Function named exam with parameter a.
    function exam(a) {
    //Declaring the variable fexam and assigning values to it.
      let fexam = (60 / 100) * a;
    //returns the value of fexam to be accessed by other functions.
      return fexam;
    }
    //Function named fnalCrsMrk without parameters.
    function fnalCrsMrk() {
    //Declaring variable fmark and assigning values to it.
      let fmark = exam(75) + crsmark(40);
    //outputs the value to the console.
      console.log(fmark);
    }//Invoking the function with fnalCrsMrk.
    fnalCrsMrk();