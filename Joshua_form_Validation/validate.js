var validate = () => {

    var userName = document.myForm.userName;
    var tel = document.myForm.tel;
    var email = document.myForm.email;
    
    

    // validating user name
    if (userName.value.length == "") {
        userName.style.border = '1px solid red';
        alert('User Name should not be left empty');
    } else // validating user name length
        if ((userName.value.length < 5) || (userName.value.length > 12)) {
            userName.style.border = '1px solid red';
            alert('User name should be between 5 and 12 characters');

            // creating a valiable to store regular(regex) rexpression   

        }
    //var letters = /^[0-9a-zA-Z]+$/ -Alphanumeric
    //  /^[0-9]+$/ - numbers

    var letters = /^[0-9]+$/;
    // checking whether user name contains letters only
    if (userName.value.match(letters)) {
        userName.style.border = '1px solid red';
        alert('User name should not be numbers or special character');
    }

    // Validating phone number
    if (tel.value.length == "") {
        tel.style.border = '1px solid red';
        alert('Phone Number can not be empty');

        
    }
    var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     var phoneno2 = /^\d{10}$/;
    /*var phoneno3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; */
    if (tel.value.match(phoneno1)) {
        
        return true;
    } else {
        alert('Invalid Phone Number');
        tel.style.border = '1px solid red';
    }

    // Validating email address

    emailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match()) {
        return true;
    }
    else {
        alert('Invalid Eamil Address');
        tel.style.border = '1px solid red';
    }

}
    