//function that  returns the greater value of the two parameters
function tests(test1, test2) {
  
    let greater = test1 > test1 ? test1 : test2;
   
    return greater;
  }
  
  //function that calculates the sum of the parameter value and the value returned by the 'tests' function. Then, it prints and returns the sum obtained
  function coursework(cswork) {
  
    let coursework = cswork + tests(80, 80);
    
    console.log(coursework);
    
    return coursework;
  }
  
  //function that returns the average of the value returned by the 'coursework' function
  function avg(a) {
   
    let avg = coursework(90) / a;
   
    return avg;
  }
  
  //funtion that returns the product of the value returned by the 'avg' function and the percentage of the parameter value
  function crsmark(a) {
   
    let exm = avg(2) * (a / 100);
    
    return exm;
  }
  //function that returns the product of the parameter value and 60%
  function exam(a) {
    
    let fexam = (60 / 100) * a;
  
    return fexam;
  }
  //function that returns the sum of the value returned by the 'exam' function and the value returned by the 'crsmark' function
  function fnalCrsMrk() {
  
    let fmark = exam(75) + crsmark(40);
  
    console.log(fmark);
  }
  fnalCrsMrk();
  //the value returned by the 'fnalCrsMrk' function is 79