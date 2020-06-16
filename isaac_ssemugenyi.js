//Declaring a variable called 'name'
var name;
//Value " ozzy queen" is assigned to name variable
name = " ozzy queen"
    //The value in name variable is logged to the console
console.log(name);
//Logging a break html tag to the console
console.log("<br/>");
//Re-declaring the variable 'name' but variable 'name' was already declared on line 2 above
var name;
//Re-assigning a value "ozzy hum" to variable name changing it from the previous value " ozzy queen"
name = "ozzy hum"
    //Logging the value of variable name to the console which is "ozzy hum"
console.log(name)
    //Re-declaring the variable 'name' again
var name;
//Assigning variable 'name' with a value "sumi mike ozyy"
name = "sumi mike ozyy"
    //Logging the value of variable name to the console which is now "sumi mike ozyy"
console.log(name)
    //Re-declaring the variable 'name' again
var name;
//Assigning variable 'name' with a value "ozzy bp"
name = " ozzy bp"
    //Logging the value of variable 'name' to the console which is now " ozzy bp"
console.log(name)
    //Assigning the variable 'name' a value " Bridget ozzy", this changes the value of 'name' from " ozzy bp" to " Bridget ozzy"
name = " Bridget ozzy"
    //Logging the value of variable 'name' to the console which is now " Bridget ozzy"
console.log(name)
    //Declaring a new variable 'age'
var age;
//Re-declaring the variable 'name' 
var name;
//Assigning the value of 50 to the 'age' variable and value "mirembe agaba kwesi" to the 'name' variable
age = 50;
name = "mirembe agaba kwesi"
    /**
     * We write to the client 'DOM' the statement 
     * "My name is mirembe agaba kwesi and I am 50 years old"
     * + name + we dynamically replace the 'name' variable with the value it is asigned to
     * likewise for 'age'
     * + " " + this creates a space in the statement
     */
document.write("My name is " + name + " " + "and I am " + age + " " + " years old");

//Declaring a variable 'x'
var x;
//Writing the value of 'x' variable to the client, which is 'undefined' since we have not assigned any value to the 'x' variable
document.write(x);
//A value of 'undefined' is assigned to the variable 'x'
var x = undefined;
//Logging to the console the value of variable 'x' at the moment which is 'undefined'
console.log(x);