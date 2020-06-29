/* fuction 'tests' declared with parameters 'test1' and 'test2'. Declare a variable 'greater'.
Define an if statement; if 'test1' is greater than 'test2', assign value of 'test1' to variable 'greater'. 
If 'test2' is greater than 'test1', assign 'test2' value to 'greater' variable. 
Return the value of the 'greater' variable. 
*/
function tests(test1, test2) {
  
    let greater = test1 > test2 ? test1 : test2;
   
    return greater;
  }
  
  /* function 'coursework' declared with parameter 'cswork'.  
  Assign variable 'coursework' with a value of 'test' function with '80' and '80' as arguments.
  Print value of 'coursework' variable in console. Return the value of 'coursework' variable. */
  function coursework(cswork) {
  
    let coursework = cswork + tests(80, 80);
    
    console.log(coursework);
    
    return coursework;
  }
  /* function 'avg' declared, with 'a' as a parameter, which returns the value of the 'coursework' funtion
  with '90' as an argument divided by 'a' argument. Return value of 'avg' variable. 
  */
  function avg(a) {
   
    let avg = coursework(90) / a;
   
    return avg;
  }
  /* function 'crsmark' declared with 'a' as a parameter. 
  Declare variable 'exm' with a value of 'avg' variable with '2' as an argument multiplied 
  by 'a' argument divided by '100'. 
  Return value of 'exm' variable. 
  */
  function crsmark(a) {
   
    let exm = avg(2) * (a / 100);
    
    return exm;
  }
  /* function 'exam' declared with 'a' as a parameter. 
  Declare variable 'fexam' with a value of '60/100' multiplied by 'a' argument. 
  Return value of 'fexam' variable. 
  */
  function exam(a) {
    
    let fexam = (60 / 100) * a;
  
    return fexam;
  }
  /* function 'fnalCrsMrk' declared.  
  Declare variable 'fmark' with a value of 'exam' function with an argument of '75' 
  plus 'crsmark' function with '40' as an argument.
  Print value of variable 'fmark' on console. 
  Call 'fnalCrsMrk' function. 
  */
  function fnalCrsMrk() {
  
    let fmark = exam(75) + crsmark(40);
  
    console.log(fmark);
  }
  fnalCrsMrk();