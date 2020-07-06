var form = document.getElementById("contactform");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var street = document.getElementById("street");
var city = documet.getElementById("city")

//validating first name
if (firstname.value.length=="") {
    firstname.style.border ='5px solid green'
    alert("firstname should not be empty")

}

//validating last name
if (firslasttname.value.length<0 || firstname.value.length> 12) {
    firstname.style.border ='5px solid green'
    alert("firstname should be between 5 and 12")

}

var letters =/^[A-Za-z]+$/;
        if(!lastname.value.match(letters)){
            lastname.style.border ='5px solid green'
            alert("lastname should not be number")
        }
  
        //validating street
        if (street.value.length=="") {
            street.style.border ='2px solid red'
            alert("street should not be empty")
        
        }
        //validating city
        if (street.value.length=="") {
            city.style.border ='2px solid red'
            alert("city should not be empty")
        
        }

        






























