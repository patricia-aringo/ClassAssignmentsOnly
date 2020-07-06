function validate(){
    //form your_details
    var first_name = document.your_address.firstname;
    var last_name = document.your_address.lastname;
    var street = document.your_address.street;
    var city = document.your_address.city;
    
    //form additional_details
    var bio = document.additional_details.bio;

    // var img = document.additional_details.img;
    // var ages = document.additional_details.ages;

    //form interests
    // var hobbies = document.interests.hobbies;
    // var fav_car = document.interests.fav_car;
    // var fav_public_transport = document.interests.fav_public_transport;
    var alphanumeric =/^[0-9]+$/;

    // fist name validation
    //checking for nothing
    
    if(first_name.value.length == ''){
        first_name.style.border = '1px solid red';
        alert('please insert your first name');
    }

    //checking for name length
    if(first_name.value.length <= 2 || firstname.value.length >25){
        first_name.style.border = '1px solid red ';
        alert('your name should have more than two characteres and less than twenty five');
    }
    //checking for alphanumeric
    
    if(first_name.value.match(alphanumeric) ){
        first_name.style.border = '1px solid red';
        alert('your name cannont contain numbers');
    }

    // last name validation
    //checking for nothing
    if(last_name.value.length == ''){
        last_name.style.border = '1px solid red';
        alert('please insert your last name');
    }

    //checking for name length
    if(last_name.value.length <= 2 || lastname.value.length >25){
        last_name.style.border = '1px solid red ';
        alert('your name should have more than two characteres and less than twenty five');
    }

    //checking for alphanumeric
    
    if(last_name.value.match(alphanumeric) ){
        last_name.style.border = '1px solid red';
        alert('your name cannont contain numbers');
    }

    
    // street validation
    //checking for other city related things
    //checking for nothing
    if(street.value.length == ''){
        street.style.border = '1px solid red';
        alert('please insert your street name');
    }

    //city validation

    //checking for nothing
    if(city.value.length == ''){
        city.style.border = '1px solid red';
        alert('please enter city name ');
    }

    //bio validation

    //checking for no input
    if(bio.value.length == ''){
        bio.style.border = '1px solid red';
        alert('please write some thing about you in the provided space');
    }
 

}