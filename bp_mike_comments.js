
function tests(test1, test2) { // function called tests with 2 parameteres test1 and test2
  
  //should let greater = test1 > test2 ? test1:test2;
    let greater = test1 > test1 ? test1 : test2;
    //if test1 is greater than test2, assign the value of test1 to variable greater, 
    //else assign the value of test2 to variable greater

   
    return greater;//return the value assigned to variable greater
  }
  
  
  function coursework(cswork) {// function called coursework with 1 parameter cswork
  
    let coursework = cswork + tests(80, 80);
    //variable coursework is assigned value that results from cswork + 80 
    //80 is as a result  of conditions in funtion tests being met
    
    console.log(coursework); // display value of variable course work
    
    return coursework;//return the value assigned to coursework
  }
  
  
  function avg(a) { // function called avg with 1 parameter a
   
    let avg = coursework(90) / a;
     //variable avg is assigned value that results from 90/a 
      
    return avg;//return the value assigned to avg
  }
  
  
  function crsmark(a) {// function called crsmark with 1 parameter a
   
    let exm = avg(2) * (a / 100);
    //variable exm is assigned value that results from 90/2 *(a/100)
    
    return exm;//return the value assigned to exm
  }
  
  function exam(a) {// function called exam with 1 parameter a
    
    let fexam = (60 / 100) * a;
        //variable fexam is assigned value that results from (60/100)*a

  
    return fexam;//return the value assigned to fexam
  }
  
  function fnalCrsMrk() {// function called fnalCrsMrk

    let fmark = exam(75) + crsmark(40);
    //variable fmark is assigned value that results from (60/100)*75 + 90/2 *(40/100)

  
    console.log(fmark);// display value of variable fmark
  }
  fnalCrsMrk();//invoke the funtion fnalCrsMrk