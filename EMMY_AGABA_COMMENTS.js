//assign parameter test1 and test2 to function tests
function tests(test1, test2) {

      //
      let greater = test1 > test1 ? test1 : test2;
      
      //returns the result of greater
      return greater;
    }
    
    //declare function coursework and assign it parameter cswork
    function coursework(cswork) {
    
      //declare function coursework limited by scope of memory block statement
      let coursework = cswork + tests(80, 80);
     
      console.log(coursework);

      //returns the result of coursework
      return coursework;
    }
    
    //declare function avg
    function avg(a) {
     
      //assign value coursework divided by a to function avg
      let avg = coursework(90) / a;
     
      //return result of avg
      return avg;
    }
    
    //declare parameter a to function crsmark
    function crsmark(a) {
    
      //assign values avg and crsmark to function exm
      let exm = avg(2) * (a / 100);
      
      //return the result of exm
      return exm;
    }
    
    //assign parameter a to function exam
    function exam(a) {
      
      //function exam will be 60 divide by 100 multiplied by a
      let fexam = (60 / 100) * a;
   
      //display the result fexam
      return fexam;
    }
    

    //declare fnalCrsMrk value to function
    function fnalCrsMrk() {
    
      //fmark will be the result of exam and csmark
      let fmark = exam(75) + crsmark(40);
      
      //display the result of fmark
      console.log(fmark);
    }
    
    //call out the declared function
    fnalCrsMrk();