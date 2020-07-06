var validate = () => {
    var name = document.mydata.name;
    var name2 = document.mydata.name2;
    var street = document.mydata.street;
    var city = document.mydata.city;
    var subject = document.mydata.subject;
    var age = document.mydata.age;
    var car = document.mydata.car

    if (name.value.length==""){
        name.style.border = '5px solid green'
        alert("name cannot be left empty")
    }

    if (name.value.length < 5 || name.value.length > 12){
        name.style.border = '5px solid red'
        alert("name should be between 5 and 12")
    }

    var letters = /[^a-zA-Z]/g;
    if (name.value.match(letters)) {
        name.style.border = '5px solid purple'
        alert("name should not be number")
    }



    if (name2.value.length==""){
        name2.style.border = '5px solid green'
        alert("last name cannot be left empty")
    }

    if (name2.value.length < 5 || name2.value.length > 12){
        name2.style.border = '5px solid red'
        alert("last name should be between 5 and 12")
    }

    var num = /[^a-zA-Z]/g;
    if (name2.value.match(num)) {
        name2.style.border = '5px solid purple'
        alert("last name should not be number")
    }


    if (street.value.length==""){
        street.style.border = '5px solid green'
        alert("street cannot be left empty")
    }

    if (city.value.length==""){
        city.style.border = '5px solid yellow'
        alert("city cannot be left empty")
    }

    if (subject.value.length==""){
        subject.style.border = '5px solid pink'
        alert("subject cannot be left empty")
    }

    if (age.value.length==""){
        age.style.border = '5px solid black'
        alert("age cannot be left empty")
    }

    var dage = /^\S[0-9]{0,3}$/;
    if (age.value.match(num)) {
        age.style.border = '5px solid purple'
        alert("age should be number only")
    }

    if (car.value.length==""){
        car.style.border = '5px solid blue'
        alert("Favorite car cannot be left empty")
    }
}