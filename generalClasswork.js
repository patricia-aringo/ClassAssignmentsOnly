function add(a, b) {
    console.log(a + b);
}

add();
var Mike = (name, age, height, weight) => {
	this.name = name;
	this.age = age;
	this.height = height;
	this.weight = weight;
}

//mirembe
var validate=()=>{

    var username=document.mydata.username;
    var telephone=document.mydata.telephone;
    var email=document.mydata.email; 
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(email.value.match(mail)){
    alert('correct email')
}
