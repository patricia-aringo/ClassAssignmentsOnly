const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const street = document.getElementById('street');
const city = document.getElementById('city');
const bio = document.getElementById('biography');
const image = document.getElementById('image');
const age = document.getElementById('age');
const hobby = document.getElementById('hobby');
const vehicle = document.getElementById('vehicle');
const transport = document.getElementById('transport');

//Adding Event Listener to the form 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

//CheckInputs function that validates all inputs
var checkInputs = ()=>{
    //Getting all input values
   const firstValue = first.value.trim(), lastValue = last.value.trim(), streetValue = street.value, cityValue = city.value,
        bioValue = bio.value, imageValue = image.value, ageValue = age.value, hobbyValue = hobby.value, vehicleValue = vehicle.value,
        transportValue = transport.value, letters = /^[A-z]+$/;

        //First name
        if(firstValue === ''){
            //show error class
            setErrorFor(first, 'First name field can\'t be blank');
        } else if(firstValue.length < 3 || firstValue.length > 12){
            //show error class
            setErrorFor(first, 'Name should be between 3 and 12 letters');
        }else if(!firstValue.match(letters)){
            //show error class
            setErrorFor(first, 'Name should only be letters');
        } else {
            //add success class
            setSuccessFor(first);
        }

        //Last name
        if(lastValue === ''){
            //show error class
            setErrorFor(last, 'Last name field can\'t be blank');
        } else if(lastValue.length < 3 || lastValue.length > 12){
            //show error class
            setErrorFor(last, 'Name should be between 3 and 12 letters');
        } else if(!lastValue.match(letters)){
            //show error class
            setErrorFor(last, 'Name should only be letters');
        } else {
            //add success class
            setSuccessFor(last);
        }

        //Street
        if(streetValue === ''){
            //show error class
            setErrorFor(street, 'Street field can\'t be blank');
        } else if(streetValue.length < 5 || streetValue.length > 12){
            //show error class
            setErrorFor(street, 'Street should be between 5 and 15 letters');
        } else {
            //add success class
            setSuccessFor(street);
        }

        // City
         if(cityValue === ''){
            //show error class
            setErrorFor(city, 'City field can\'t be blank');
        } else if(cityValue.length < 5 || cityValue.length > 12){
            //show error class
            setErrorFor(city, 'City should be between 5 and 12 letters');
        } else if(!cityValue.match(letters)){
            //show error class
            setErrorFor(city, 'City should only be letters');
        } else {
            //add success class
            setSuccessFor(city);
        }

        // Biography
        if(bioValue === ''){
            //show error class
            setErrorFor(bio, 'Bio field can\'t be blank');
        } else if(bioValue.length < 10 || bioValue.length > 120){
            //show error class
            setErrorFor(bio, 'Bio sh\'d atleast be 10 and not more than 120 letters');
        } else {
            //add success class
            setSuccessFor(bio);
        }

        // image
        if(imageValue === ''){
            //show error class
            setErrorForImage(image, 'Please select an image');
        } else {
            //add success class
            setSuccessFor(image);
        }

        // age
        if(ageValue === ''){
            //show error class
            setErrorFor(age, 'Kindly make an age selection');
        } else {
            //add success class
            setSuccessFor(age);
        }

        // hobby
        if(hobbyValue === ''){
            //show error class
            setErrorFor(hobby, 'Kindly make a hobby selection');
        } else {
            //add success class
            setSuccessFor(hobby);
        }

        // vehicle
        if(vehicleValue === ''){
            //show error class
            setErrorFor(vehicle, 'Kindly select a vehicle option');
        } else {
            //add success class
            setSuccessFor(vehicle);
        }

        // transport
        if(transportValue === ''){
            //show error class
            setErrorFor(transport, 'Kindly select a transport option');
        } else {
            //add success class
            setSuccessFor(transport);
        }
}

//SetErrorFor function to add error class to input fields
var setErrorFor = (input, message)=>{
    const detail = input.parentElement.parentElement; //div with detail class
    const small = detail.querySelector('small');
    //Add error message inside small
    small.innerText = message;
    //add error class
    detail.className = 'detail error';
}

////SetSuccessFor function to add success class to input fields
var setSuccessFor = (input)=>{
    const detail = input.parentElement.parentElement; //div with detail class
    //add error class
    detail.className = 'detail success';
}

////SetErrorForImage function to add error class to image input field
var setErrorForImage =(input, message)=> {
    const detail = input.parentElement.parentElement; //div with detail class
    const small = detail.querySelector('small');
    //Add error message inside small
    small.innerText = message;
    //add image error class
    detail.className = 'detail error-image'
}
