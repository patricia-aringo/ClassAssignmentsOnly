//Declaring a function definition 'tests' with two parameters
function tests(test1, test2) {
    /**
     * Declaring a variable 'greater' and assign it a value of either 'test1' or 'test2' based on the output from the ternary expression
     * Here the comparision was not done properly, test1 was compared to test1 instead of test1 to test2, this will all be equal to false
     * Since this will always be equal to false, the test2 value will always be assigned to greater variable and always returned out of this function
     */

    let greater = test1 > test1 ? test1 : test2;
    //The value of 'greater' variable returned to be used outside the 'tests' function
    return greater;
}

//Declaring a function definition 'coursework' with a single parameter
function coursework(cswork) {
    //Declaring a variable 'coursework' and a it result of 'cswork' + tests() function
    let coursework = cswork + tests(80, 80);
    //Output the value of 'coursework' variable to the console
    console.log(coursework);
    //Return the value of 'coursework' for use outside the coursework() function
    return coursework;
}

//Declaring a function definition 'avg' with a single parameter
function avg(a) {
    //Declaring a variable 'avg' and assign it the result of got from the returned value from coursework function divided by argument passed to 'avg' function 
    let avg = coursework(90) / a;
    //Return the value of 'avg' for use outside the avg() function
    return avg;
}

//Declaring a function definition 'crsmark' with a single paramenter
function crsmark(a) {
    //Declaring a variable 'exm' and assigning it the value returned by 'avg() function multiplied with result of aurgument a/100
    let exm = avg(2) * (a / 100);
    //Return the value of 'exm' for use outside the crsmark() function 
    return exm;
}

//Declaring a function definition 'exam' with a single parameter
function exam(a) {
    //Declaring a variable 'fexam' and assigning it the result of (60/100) * the aurgument a passed to the exam function
    let fexam = (60 / 100) * a;
    //Return the the value of 'fexam' for use outside the exam() function 
    return fexam;
}

//Declaring a function definition 'finalCrsMrk' with no parameters
function fnalCrsMrk() {
    //Declaring a variable 'fmark' and assigning it the returned value from the exam() function added to returned value from crsmark() function
    let fmark = exam(75) + crsmark(40);
    //Output to the console the value of fmark variable
    console.log(fmark);
}
fnalCrsMrk();
//Invoking the finalCrsMark() function