function tests(test1, test2) {
    //function "tests" is declared which it takes two parameters that is "test1" and "test2"
    let greater = test1 > test1 ? test1 : test2;
    //a variable "greater" is declared and initialized to store the result of the testing condition that is if it evaluates to true "greater" stores value in "test1" and if false it stores value in "test2"
    //this automatically is false bacause variable test1 cannot be greater that itself (it is stricty equal) therefore "greater" will store the value of "test2")
    return greater;
    //the function returns the value stored in "greater" which will be "test2"
}


function coursework(cswork) {
    //function "coursework" is declared taking on a single parameter "cswork"
    let coursework = cswork + tests(80, 80);
    //variable "coursework" is declared and initialised to store the value of the result "cswork + test(80,80)"
    //the operation "cswork + test(80,80)" adds the value "cswork" and the value returned after calling "test(80,80)"
    console.log(coursework);
    //inbuilt function will print out the value in variable "coursework" on the terminal
    return coursework;
    //the function "coursework" will return the value in varable "corsework"
}


function avg(a) {
    //function avg is declared and takes on a single parameter "a"
    let avg = coursework(90) / a;
    //variable "avg" is declared and initialised to store the result of operation "coursework(90) / a"
    //the operation "coursework(90) / a" returns the result of (the value returned after invoking the function "coursework" with an argument "90" and this is divided by value in variable "a"  
    return avg;
    //the function returns the value in variable "avg"
}


function crsmark(a) {
    //function "crsmark" is decalred and takes on a single parameter "a"
    let exm = avg(2) * (a / 100);
    // variable "exm" is decalared and initialized to store the result of the operation "avg(2) * (a / 100)"
    // the operation "avg(2) * (a / 100)" mutliplies the value returned after calling (funtion "avg(2)") by the (value of argument "a" divided by 100)
    return exm;
    //funtction "crsmark" returns the value stored in the variable "exm"
}

function exam(a) {
    //function "exam" is declared takes on a single parameter "a"
    let fexam = (60 / 100) * a;
    //variable "fexam" is declared and initialized to store the value of the result of the operation "(60 / 100) * a"
    // the operation "(60 / 100) * a" multiplies (60/100) by the argument "a"
    return fexam;
    //funtion "exam" returns the value stored in the variable "fexam"
}

function fnalCrsMrk() {
    //function "fnalCrsMark" taking no parameters
    let fmark = exam(75) + crsmark(40);
    // variable "fmark" is declared and intialised to store the value result of the operation "exam(75) + crsmark(40)"
    // the operation "exam(75) + crsmark(40)" adds (the value returned when function "exam" is invked with the argument "75") with (he value returned when function "crsmark" is invked with the argument "40")
    console.log(fmark);
    //inbuilt function is prints the value stores in "fmark" through the terminal
}
fnalCrsMrk()
    //function "fnalCrsMark" is invoked