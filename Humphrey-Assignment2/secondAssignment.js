//Declaring a function test with two arguments
function tests(test1, test2) {
    //Declaring a variable greater with a condition to test the argumentsa
    let greater = test1 > test1 ? test1 : test2;
    // calling the funtion greater
    return greater;
}

    //declaring the function called cursework and in it a paremeter cswork is a variable
function coursework(cswork) {
    //declaring a varible called coursework asigning it to csworsework 
    let coursework = cswork + tests(80, 80);
    //commanding terminal to output a string named coursework
    console.log(coursework);
    //calling  the function coursework
    return coursework;
}

//declaring a function avg with a (a) paremeter
function avg(a) {
    //declaring a a variable called avg, asigning it to coursework with a parementer 90 dived by a 
    let avg = coursework(90) / a;
    //calling a function avg
    return avg;
}

//declaring a function crsmark with a paremeter "a" 
function crsmark(a) {
    //declaring a function exm ans asigning it to avg which includes 2 as a paremeter, multipling it with(a%)
    let exm = avg(2) * (a / 100);
    //calling a function exm 
    return exm;
}
//declaring a function exam with paremeter a
function exam(a) {
    //declaring a function fexam asigning it to 60% and multiplying it with paremeter  a
    let fexam = (60 / 100) * a;
    //calling a function called fexam
    return fexam;
}
//declaring a function called function fnalCrsMrk 
function fnalCrsMrk() {
    //declaring a function fmark asigning it to a variable exam with paremeter 75 anding it to crsmark with paremeter 40
    let fmark = exam(75) + crsmark(40);
    //commanding the terminal to output the function fmark
    console.log(fmark);
}
//calling a function fnalCrsMrk
fnalCrsMrk();