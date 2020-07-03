var Mike = (name, age, height, weight) => {
	this.name = name;
	this.age = age;
	this.height = height;
	this.weight = weight;
}


var validate=()=>{

    var username=document.mydata.username;
    var telephone=document.mydata.telephone;
    var email=document.mydata.email; 
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(email.value.match(mail)){
    alert('correct email')
}else{
    alert('wrong email address');
    email.style.border='2px solid red';
}

}