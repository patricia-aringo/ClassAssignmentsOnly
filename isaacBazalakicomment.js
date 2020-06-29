
function tests(test1, test2) {
    //THE tests FUNCTION WITH PARAMETERS test1 and test2.
      let greater = test1 > test1 ? test1 : test2;
      //LET DECLARES THE greater VARIABLE WITH VARIABLES test1 and test2
      return greater;
      //RETURNS THE VALUE FROM THE greater VARIABLE TO BE ACCESSED BY OTHER FUCTIONS.
    }
    
    function coursework(cswork) {
    //FUNCTION COURSEWORK WITH A PARAMETER cswork.
      let coursework = cswork + tests(80, 80);
    //DECLARING THE COURSEWORK VARIABLE WITH VALUES ATTAINED AFTER ADDING cswork + test1, test2.
    //test1 and test2 VARIABLES ARE DYNAMIC IN THAT THEY HAVE NO SPECIFIC VALUES.
      console.log(coursework);
    //OUTPUTS THE VALUE OF THE coursework TO THE CONSOLE.
      return coursework;
      //RETURNS THE VALUE coursework TO BE ACCESSED BY OTHER FUNCTIONS.
    }
    
    
    function avg(a) {
    //FUNCTION NAMED avg WITH PARAMETER a
      let avg = coursework(90) / a;
    //DECLARING THE avg VARIABLE WITH VALUES RESULTING FROM coursework(90)/a
    
      return avg;
      //RETURNS THE VARIABLE avg TO BE ACCESSED BY OTHER FUNCTIONS
    }
    
    
    function crsmark(a) {
    //FUNCTION NAMED crsmark WITH PARAMETER a.
      let exm = avg(2) * (a / 100);
    //DECLARING THE exm VARIABLE WITH VALUES RESULTING FROM avg(2)*(a/100).
      return exm;
      //RETURN THE VARIABLE EXM TO BE ACCESSED BY OTHER FUNCTIONS.
    }

    function exam(a) {
    //FUNCTION NAMED exam WITH PARAMETER a.
      let fexam = (60 / 100) * a;
    //DECLARING THE fexam VARIABLE WITH VALUES RESULTING FROM (60/100)*a.
      return fexam;
      //RETURNS THE fexam VARIABLE TO BE ACCESSED BY OTHER FUNCTIONS.
    }
    
    function fnalCrsMrk() {
    //FUNCTION NAMED fnalcrsmrk WITHOUT PARAMETERS.
      let fmark = exam(75) + crsmark(40);
    //DECLARING THE VARIABLE fmark AND ASSIGNING IT VALUES exam + crsmark.
      console.log(fmark);
    }//OUTPUTS THE VALUES OF THE fmark.
    fnalCrsMrk();
    //INVOKING THE FUNCTION WITH fnalcrsMrk.