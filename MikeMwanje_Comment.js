//Function to get the greater of any two values
function tests(test1, test2) {

    //Using the ternary operator to get a value and assign it to a local variable greater
    let greater = test1 > test1 ? test1 : test2;
    //this will return an error considering that the values being compared are of the same value

    // Return the value of variable greater to the invoking function 
    return greater;
}

function coursework(cswork) {

    /* Adding the argument cswork passed passed to this function to the result of 
    invoking function tests with parameters 80 and 80, and assigning the summation 
    to local variable coursework */
    let coursework = cswork + tests(80, 80);

    // Printing variable coursework to the console
    console.log(coursework);
  
    // Return the value of variable coursework to the invoking function 
    return coursework;
}


function avg(a) {

    /* Invoking function coursework with parameter 90, dividing the result with variable a,
    and assigning it to local variable avg*/
    let avg = coursework(90) / a;

    // Return the value of variable avg to the function that invoked this function
    return avg;
}

function crsmark(a) {

    /* Invoking function avg with an argument 2, multiplying its result 
    with a the passed parameters divided by 100, and assigning the 
    product to a local variable exm */
    let exm = avg(2) * (a / 100);

    // Returning the value of the variable exm to the invoking function
    return exm;
}

// Function to get 60% of a given value passed to it
function exam(a) {

    // Assigning 60% of the variable (a) to a local variable fexam
    let fexam = (60 / 100) * a;

    // Returning the value in variable fexam to the invoking function
    return fexam;
}

//Function to add two given values
function fnalCrsMrk() {

    /*Assigning the result of invoking the fuctions exam and crsmark with arguments 75 and 40
     respectively to a local variable fmark */
    let fmark = exam(75) + crsmark(40);

    //Printing the value in fmark to the console
    console.log(fmark);
}
fnalCrsMrk();// Invoking function fnalCrsMrk