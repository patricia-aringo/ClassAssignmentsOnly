var validate = ()=> {
    var firstname = document.mydata.firstname;

    //validating firstname
    if (firstname.value.length=="") {
        firstname.style.border = '2px solid red'
        alert("firstname should not be empty")

    }
    // validating last name
    var lastname = document.mydata.lastname
    if (lastname.value.length=="") {
        lastname.style.border = '2px solid red'
        alert("last should not be empty")

    }
    // validating the city
    var city = document.mydata.city
    if (city.value.length=="") {
        city.style.border = '2px solid red'
        alert("city should not be empty")

    }
    // validating the image
    var myfile = document.info.myfile
    if (myfile.value.length=="") {
        myfile.style.border = '2px solid red'
        alert("imagefile should not be empty")

    }
}
