var validate=()=> {
    var firstname=document.mydata.firstname;
    var lastname=document.mydata.lastname;
    var street=document.mydata.street;
    var city=document.mydata,city;

    //validating first name
    if(firstname.value.length==""){
        firstname.style.boder='2ps solid red'
        alert('please fill in first name');
    }
    //validating last name
    if(lastname.value.length==""){
        lastname.style.boder='2ps solid red'
        alert('please fill in last name');
    }
    //street validation
    if(street.value.length==""){
        street.style.boder='2ps solid red'
        alert('please fill in street feild');
    }
    //city validation
    if(city.value.length==""){
        city.style.boder='2ps solid red'
        alert('please fill in first name');
    }
    // firt name validation to only alphabetes
    var letters =/^[A-Za-z]+$/; 
    if (firstname.value.match(letters)){
        firstname.style.border='1px dashed blue'; 
        alert("first name shouldnot include number");
    } 
    //last name validation to only alphabetes
    if (lastname.value.match(letters)){
        lastname.style.border='1px dashed blue'; 
        alert("last name shouldnot include number");
    } 
    //city validation to only alphabates
    if (city.value.match(letters)){
        city.style.border='1px dashed blue'; 
        alert("city name shouldnot include number");
    } 


}