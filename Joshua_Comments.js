
/* 
    Function that returns the test with the highest score
*/
function tests(test1, test2) {
  
    // choosing which test is highest and assigning it to variable greater
    let greater = test1 > test1 ? test1 : test2;
   
    return greater;
  }
  
  /* 
    Function which computes the coursework marks 
  */
  function coursework(cswork) {
  
    let coursework = cswork + tests(80, 80);
    
    console.log(coursework);
    
    return coursework;
  }
  
  /* 
    Function returning the average coursework marks
  */
  function avg(a) {
   
    let avg = coursework(90) / a;
   
    return avg;
  }
  
  /* 
    Defining and returning the exam mark
  */
  function crsmark(a) {
   
    let exm = avg(2) * (a / 100);
    
    return exm;
  }
  /* 
    Defining and returning the final exam mark
  */
  function exam(a) {
    
    let fexam = (60 / 100) * a;
  
    return fexam;
  }
  /* 
    Defining and returning the final course mark
  */
  function fnalCrsMrk() {
  
    let fmark = exam(75) + crsmark(40);
  
    console.log(fmark);
  }

  // invoking function fnalCrsMrk
  fnalCrsMrk();
