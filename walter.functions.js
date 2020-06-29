function phone(name, color, brand, type,size, view, gift){
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.type = type;
    this.size = size;
    this.view = view;
    this.gift = gift;

    // declaring 2 methods into the function.
    this.gift=()=>{
        console.log("buy two and get one more for free.")
    }
    this.view=()=>{
        console.log("it glows");
    }
}

var iphone = new phone();
    iphone.name = "iphone";
    iphone.color = "Red";
    iphone.brand = "Apple";
    iphone.type = "Apple";
    iphone.size = "6inch";

console.log(iphone);
for (let item in iphone){
    console.log(item + " " + iphone[item]);
}
//invoking
iphone.gift();
iphone.view();






function Team(name, color, league, country, trophies, manager){
    this.name = name;
    this.color = color;
    this.league = league;
    this.country = country;
    this.trophies = trophies;
    this.manager = manager;
    
    //method.
    this.manager=()=>{
        console.log("Ole loves winiing these days.");
    }
}

var Manchester = new Team();
Manchester.name = "Manchester";
Manchester.color = "Red";
Manchester.league = "Premier league";
Manchester.country = "England";
Manchester.trophies = 18;

console.log(iphone);
for (let item in Manchester){
    console.log(item + " " + Manchester[item]);
}
//invoking

Manchester.manager();



 function house(){
     this.name;
     this.design;
     this.shape;
     this.color;
     this.address;


     this.height=()=>{
        console.log("its a flat house");
     }
     this.sound=()=>{
         console.log("echoes are always in the house.");
     }
 }

 var bungalow = new house();
 bungalow.name = "bungalow";
 bungalow.design = "bungalow";
 bungalow.shape = "circle";
 bungalow.color = " brown";
 bungalow.address = "Busega";

 console.log(bungalow);
 for (item in bungalow){
     console.log(item + " " + bungalow[item]);
 }


 bungalow.height();
 bungalow.sound();







function book(){
    this.name;
    this.color;
    this.size;
    this.type;
    this.make;
    this.page;

this.shape=()=>{
    console.log("the books have many shapes.")
}
 }

    let picfare = new book();
    picfare.name = "picfare";
    picfare.color = "Grey";
    picfare.size = "4inch";
    picfare.type = "textboook";
    picfare.make = "uganda";
    picfare.page=()=>{
            console.log("the pages are white in color.");
        }
    
 console.log(picfare);
 for (let item in picfare){
     console.log(item + " " + picfare[item]);
 }
// //invoking 
  picfare.page();
//  picfare.shape();














//Declaring function person .
 function person(){
     this.name;
     this.age;
     this.weight;
     this.height;
     this.size;

     this.speak=()=>{
        console.log("Speaks two languages only.")
     }
     this.walk=()=>{
         console.log("it walks very fast.");
     }
 }

 let baby = new person();
 baby.name = "Clara";
 baby.age = 5;
 baby.weight = "20kg";
 baby.height = "2inch";
 baby.size = "fat";


 console.log(baby);
 for (item in baby){
     console.log(item + " " + baby[item]);
 }


 baby.speak();
 baby.walk();





 function school(){
     this.name;
     this.location;
     this.country;
     this.sponsor;
     this.district;
     this.best;
 }

 var school1 = new school();
school1.name = "Refactory";
school1.location = "Muyega";
school1.country = "Uganda"
school1.sponsor = "Clarke INternational University";
school1.district = "Kamapala";

school1.best=()=>{
    console.log("The best tech school in Uganda.");
}

for (items in school1){
    console.log(items + " " + school1[items]);
}

school1.best();


function teacher(){
    this.name;
    this.school;
    this.subject;
    this.position;
    this.joke;
    this.car;
}


let Ozzy = new teacher();
Ozzy.name = "Ozzy";
Ozzy.school = "Refactory";
Ozzy.subject = "Javascript";
Ozzy.position = "Final decider on Bootcamp";

Ozzy.joke=()=>{
    console.log("He is ever making jokes.")
}

for (items in Ozzy){
    console.log(items + " " + Ozzy[items]);
}

Ozzy.joke();