
var book = {
    name:"7habbits",
    author:"Stephen covey",
    sold:"100000 copies",
    facePagecolor:"black",
    habits: () => {
        console.log ("Be proactive","Begin with the end in mind","Fisrt things first","Think win-win","Seek first to understand then to be understand stood","Synergize","sharpen the sword'Growth'")
    }
}


for (let item in book) {
    console.log(item +" "+ book[item])
}

book.habits();


function drink(name, color, size, taste, flavor, brand) {
    this.name =name;
    this.color =color;
    this.size = size;
    this.taste =taste;
    this.flavor =flavor;
    this.brand =brand;  
}

var drink1 = new drink("Bell","gold","5ltr","alcoholic","wheat","uganda waragi");
var drink2 = new drink("cocacola","yellow","1ltr","sweet","cocoa","fanta");

console.log(drink1);
for(let item in drink1){
    console.log(item +" "+ drink1[item]);
} 

console.log(drink2);
for(let item in drink2){
    console.log(item +" "+ drink2[item]);
} 


function cloth(name, color, size, price, type, brand) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.price = price;
    this.type =type;
    this.brand = brand;
    this.matches = function(){
        console.log('It can work well on all kinds of parties and body sizes')
        }
    }
    var cloth1 = new cloth("mama wear","light blue",40,100000,"kitengi","African wear");
    var cloth2 = new cloth("Child wear","rainbow","4",50000,"cotton","Gucci");
    var cloth3 = new cloth("sweaters","brown","XXL",60000,"German","Alingo")
    
    console.log(cloth1);
    for(let item in cloth1){
        console.log(item +" "+ cloth1[item]);
    } 
    
    console.log(cloth2);
    for(let item in cloth2){
        console.log(item +" "+ cloth2[item]);
    }  
    console.log(cloth3);

     function pet(name,age,type,gender,size){
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.size = size;
        this.about=function(){ 
            ("it enjoys staying arround happy people");
        }
    }
    
    var pet1 = new pet("Trump",3,"cat","male","5kg") 
    var pet2 = new pet("sheila",5,"dog","female","20kg")

    console.log(pet1)
    for(let item in pet1){
        console.log(item +" "+ pet1[item]);
    } 

    for(let item in pet2){
        console.log(item +" "+ pet2[item]);
    } 

    var cup = {
        name:"Mug",
        Type:"Metallic",
        size:12,
        price:5000,
        producer:"Nice House of plastics",
        whole_seller:"Kikuubo",
        retailer:"Ozzy",
        distributer:"Kwesi",

        note:() => {
            console.log ("Nice can produce 100000pieces of this type of cups everyday")
        }
    }
    
    for (let item in cup) {
        console.log(item +" "+ cup[item])
    }
    console.log(cup)
    cup.note()

    function car(name, color, size, fuelType, brand, cost, owner) {
        this.name =name;
        this.color =color;
        this.size = size;
        this.fuelType =fuelType;
        this.brand =brand;
        this.cost =cost;
        this.owner =owner;  
    }
   
    var Subaru = new car("subaru forester","red","four carrier","petrol","forester500",400000000,"Humphrey");
    var Sprinter = new car("Sprinter","dark gray","2 carrier","petrol","Sprintermodel 2001",8000000,"Ozzy");
    var Allion = new car( "Allion","light blue","four sitter","petrol","Toyota Premeo",5000000,"Mzee Kato");
    console.log(Subaru);
    for(let item in Subaru){
        console.log(item +" "+ Subaru[item]);
    } 
    console.log(Subaru);
    
    console.log(Sprinter);
    for(let item in Sprinter){
        console.log(item +" "+ Sprinter[item]);
    } 
    console.log(Sprinter)

    for(let item in Allion){
        console.log(item+" "+Allion[item]);
    }
    console.log(Allion)

    var computer = {
        name:"HP",
        Type:"Stream note pad ti08",
        size:6,
        cost:700000,
        Owner:"Humphrey",
        use:"Refactory Program",

        note:() => {
            console.log ("it has failed to install kali linux and am mad about it")
        }
    }
    
    for (let item in computer) {
        console.log(item +" "+ computer[item])
    }
    console.log(computer)
    computer.note()  
    
