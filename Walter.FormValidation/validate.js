const form = document.getElementById('forms');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const street = document.getElementById('street');
const city = document.getElementById('city');
const bio = document.getElementById('bio');
const image = document.getElementById('image');
const age = document.getElementById('age');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

var checkInputs = () => {
    //Obtain the values from the inputs.
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const streetValue = street.value.trim();
    const cityValue = city.value.trim();
    const bioValue = bio.value.trim();
    const imageFile = image.value;
    const Age = age.value.trim();
    const letters = /^[A-z]+$/;


    //Validating fot the First name.
    if(fnameValue == ''){
        //show error
        //add error class.
        setErrorFor(fname, 'First name cannot be blank');
    } else if(!fnameValue.match(letters)){
        setErrorFor(fname, 'First name cannot be in numbers')
    } 
    else {
        //add success class.
        setSuccessFor(fname);
    }


    //Validating for the Last name.
    if(lnameValue == ''){
        setErrorFor(lname, 'Last name cannot be blank ')
    } else if(!lnameValue.match(letters)){
        setErrorFor(lname, 'Last name cannot be in numbers')
    } 
    else {
        //add success class.
        setSuccessFor(lname);
    }


    //Validating for the street.
    if(streetValue == ''){
        setErrorFor(street, 'Street Should not be empty');
    } else if (!streetValue.match(letters)){
        setErrorFor(street,'Street can not be numbers');
    }
    else {
        setSuccessFor(street)
    }

    //Validating for City.
    if(streetValue == ''){
        setErrorFor(city, 'City field cannnot be empty');
    } else if (!cityValue.match(letters)){
        setErrorFor(city, 'City cannot be numbers');
    } else {
        setSuccessFor(city);
    }


    //VAlidating for Biography.
        if (bioValue == ''){
        setErrorFor(bio, 'Biography is required.');
    } else {
        setSuccessFor(bio);
    }

    //Validating  for Image.
    if (imageFile == ''){
        setErrorFor(image, 'image File not uploaded')
    } else {
        setSuccessFor(image);
    }

    //Validating for Age.
    if (Age == 'select age'){
        setErrorFor(age, 'Age field is required')
    } else {
        setSuccessFor(age);
    }


    
}


function setErrorFor(input, message){

    //for the div class form-control.
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');



    //Adding the message for the error for the small Tag.
    small.innerText = message;


    //Adding error class.
    formControl.className = 'form-control error';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}