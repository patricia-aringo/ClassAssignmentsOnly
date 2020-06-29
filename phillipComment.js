//Function with name tests is declared and is passed to (test1, test2) as its arguemnts.
function tests(test1, test2) {
  //Line 4 is showing how a ternary operator works instead of using if else you use a ?(question mark).
  /*let has declared greater as its variable and if test1 is greater than test2 then
  the value which runs true will be the output*/
    let greater = test1 > test1 ? test1 : test2;
   //returns the value outputed on line 6.
    return greater;
  }
  
  //coursework is being declared with function variable and cswork is the arguemnt passed in coursework.
  function coursework(cswork) {
  //Coursework is being declared using let and is assigned cswork plus(+) tests which is passed arguements(80, 80) in it.
    let coursework = cswork + tests(80, 80);
    //console.log will print the value of coursework to the terminal.
    console.log(coursework);
    //This will return the value of coursework on line 14.
    return coursework;
  }
  
  //Function is declaring avg as a variable which contains parameter (a) passed in it.
  function avg(a) {
   //Let is declaring avg which is assgined coursework and is passed parameter (90) which is divisable by a value a.
    let avg = coursework(90) / a;
   //This will return the value on line 24.
    return avg;
  }
  
  //function is declaring crsmark as a variable which is passed parameter (a) in it
  function crsmark(a) {
   /*let is declaring exm as a variable and is assigned to avg which is passed parameter(2) and is multiplied(*)
   by values a which is divided by 100*/
    let exm = avg(2) * (a / 100);
    //This will return the output on line 33.
    return exm;
  }
  
  //Exam is being declared as a variable and parameter (a) is passed to it.
  function exam(a) {
    //fexam is a variable and is declared by let function assigned to 60 divided(/) 100 and the result is multiplied(*) by value a.
    let fexam = (60 / 100) * a;
  //This will return the final output of line 41.
    return fexam;
  }
  
  //function is declaring fnalCrsMrk as a local variable and can only be accessed inside the function.
  function fnalCrsMrk() {
  //let is declaring fmark which is assigned to exam and passed parameter(75) adding(+) crsmark passed with parameter(40).
    let fmark = exam(75) + crsmark(40);
  //console.log(fmark); will print the output of line 49 to the console.
    console.log(fmark);
  }
  //call invoke of fnalCrsMrk() function of line 47.
  fnalCrsMrk();