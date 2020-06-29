//Function named test with parameters as test1 and test2.
function tests(test1, test2) {
//Declaring a variable let with greater and an argument assigned to it.
  let greater = test1 > test1 ? test1 : test2;
//Stores the value of greater to be used later in the console.
  return greater;
}

//Function named coursework with parameter as cswork.
function coursework(cswork) {
//Declaring a variable let with coursework and a sum value assigned to it.
  let coursework = cswork + tests(80, 80);
//Display value of coursework on console.
  console.log(coursework);
//Stores coursework value to be used later in the console.
  return coursework;
}

//Function named avg with parameter a.
function avg(a) {
//Declaring a variable let with avg and value assigned to it.
  let avg = coursework(90) / a;
//Stores the value of avg to be used later in the console.
  return avg;
}

//Function named crsmark with parameter a.
function crsmark(a) {
//Declaring a variable let with exm and value assigned to it.
  let exm = avg(2) * (a / 100);
//Stores the value of exm to be used later in the console.
  return exm;
}


//Function named exam with parameter a.
function exam(a) {
//Declaring a variable let with fexam and value assigned to it.
  let fexam = (60 / 100) * a;
//Stores the value of fexam to be used later in the console.
  return fexam;
}


//Function named fnalCrsMrk without parameters.
function fnalCrsMrk() {
//Declaring a variable let with fmark and a sum value assigned to it.
  let fmark = exam(75) + crsmark(40);
//Display value of fmark on console.
  console.log(fmark);
}

//Invoking the function with fnalCrsMrk.
fnalCrsMrk();