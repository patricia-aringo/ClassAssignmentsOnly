//Defining the class tree
function tree(){
    this.name
    this.species
    this.height
    this.lifeSpan
    this.region
    this.maturityAge
    this.climate
}


// Creating an object with properties from the class tree
var pine = new tree();
pine.name = "pine";
pine.species = "pinus";
pine.height = "63 meters";
pine.lifespan = "1000 years";
pine.region = () =>{
    console.log("nothern hemisphere");
}
pine.maturityAge = "10 years";
pine.climate = () =>{
    console.log("It grows in areas with more precipitation");
}
//Calling the methods used in the instance of class tress. 
pine.region();
pine.climate();

//Defining the class bird
function bird(){
    this.name
    this.color
    this.wingSpan
    this.beak
    this.food
    this.type
    this.lifespan
}
// Creating an instance of bird with properties 
var eagle = new bird;
eagle.name = "eagle";
eagle.color = () =>{
    console.log("It is a combination of white, black, brown and yellow");
}
eagle.wingSpan = "2.3 meters";
eagle.beak = "curved";
eagle.food = "carnivore";
eagle.type = "wild";
eagle.lifespan = () =>{
    console.log("between 14 - 20 years");
}
//Calling methods used on two of the object eagle properties 
eagle.color();
eagle.lifespan();

//Defining the class country
function country(){
    this.name
    this.size
    this.continent
    this.religion
    this.president
    this.occupation
    this.population
}
// An object of class country, with properties 
var iraq = new country;
iraq.name = "iraq";
iraq.size = "437,072 km²";
iraq.continet = "Asia";
iraq.religion = "Islam";
iraq.president = () =>{
    console.log("He is called Barham Salih");
}
iraq.occupation = () =>{
    console.log("US military");
}
iraq.population = "38.43 million";

// Calling methods used in the object 
iraq.president();
iraq.occupation();

// Class ocean
function ocean(){
    this.name
    this.size
    this.location
    this.color
    this.waterType
    this.formation
    this.ancientName
}
// An instance of ocean with its properties 
var pacific = new ocean;
pacific.name = "pacific";
pacific.size = "165.2 million km²";
pacific.location = () =>{
    console.log("is bounded by the continents of Asia and Australia in the west and the Americas in the east.");
}
pacific.color = "blue";
pacific.waterType = "salty";
pacific.formation = () =>{
    console.log("The Pacific Ocean evolved in the Mesozoic from the Panthalassic Ocean,");
}
pacific.ancientName = () =>{
    console.log("None that i know of as yet");
}
//Calling the methods employed
pacific.location();
pacific.formation();
pacific.ancientName();

//Class continent
function continent(){
    this.name
    this.size
    this.famousCountry
    this.greatLake
    this.climate
    this.winter
    this.famousRiver
}

//Instance of continent with its properties 
var africa = new continent;
africa.name = africa;
africa.size = "30.37 million km²";
africa.famousCountry = () =>{
    console.log("Most people state Sounth Africa but I think Nigeria could also count");
}
africa.greatLake = "Lake Victoria";
africa.climate = () =>{
    console.log("It is a mixture but predominantly tropical");
}
africa.winter = "No winter";
africa.famousRiver = "river Nile";

// Calling the methods
africa.famousCountry();
africa.climate();

// Class planet
function planet(){
    this.name
    this.position
    this.life
    this.water
    this.distance
    this.temperature
    this.age
}

//Instance of planet with its properties 
var pluto = new planet;
pluto.name = "pluto";
pluto.position = () =>{
    console.log("It is the 9th on our solar system");
}
pluto.life = () =>{
    console.log("It is believed there isn't");
}
pluto.water = "no water";
pluto.distance = "4.9526 billion km";
pluto.temperature = "extremely cold";
pluto.age = "4.46 to 4.6 billion years";

// Calling the methods in object pluto
pluto.position();
pluto.life();

// Class television
function television(){
    this.brand
    this.size
    this.year
    this.price
    this.display
    this.color
    this.screenType
}

//Instance of television with its properties 
var z9g = new television;
z9g.brand = "sony";
z9g.size = () =>{
    console.log("It comes in a variety of sizes");
}
z9g.year = 2019;
z9g.price = () =>{
    console.log("The price is unavailable");
}
z9g.display = "HDR";
z9g.color = "black";
z9g.screenType = "touch screen";

// Calling methods used in the object z9g
z9g.size();
z9g.price();