var animal = {
    name:"monkey",
    specie:"mammal",
    lifespan:"100",
    color:"black",
    cry:function (){
        console.log("It charters.");
        
    }
}
for(let item in animal){
console.log(item +" " +animal[item]);
}
animal.cry();

function laptop (name,color,size,os,model,brand){
this.name=name;
this.color=color;
this.size=size;
this.os=os;
this.model=model;
this.brand=brand;
}
var laptop1=new laptop("hp","silver","17inch","windows","pavillion","hp");
var laptop2=new laptop("dell","silver","17inch","windows","inspiron","hp");

console.log(laptop1);
for(let item in laptop1){
    console.log(item +" "+laptop1[item]);
    
}
console.log(laptop2);
for(let item in laptop2){
    console.log(item + " " +laptop2[item]);
    
}




/*var tree = {
name:"apple tree",
rootType:"tap root",
leafColor:"green",
kingdom:"plantae",
friutColor:"red",
type:"perenial",
leafVennation:"network",
source:function(){
    console.log("It is grown in all countries.")
},
care:()=>{
console.log("Watering");

}
}
for(let item in tree){
    console.log(item + "/ "+ tree[item]);
    
}
console.log(tree.source())
console.log(tree.care());
*/




/*var house = {
    name:"flat",
    height:"tall",
    structure:"floors",
    size:"huge",
    color:"white",
    owners:function (){
        console.log("It is owned by businesses mostly.");
        
    },
    materials:function(){
console.log("Cement,bricks,timber.");

    }
}
for(let item in house){
console.log(item +" " +house[item]);
}
console.log(house.owner());
console.log(house.materials());
*/




/*var phones = {
    name:"Itel",
    memory:"3gb",
    size:"2inch",
    color:"black",
    os:"android",
    brand:"Itel",
    model:"Y116",
    storage:function (){
        console.log("It uses GB.");
        
    },
    source:function(){
        console.log("It is manufactured from Uganda.");
        
    }
}
for(let item in phone){
console.log(item +" " +phone[item]);
}
console.log(phone.storage());
console.log(phone.source());
*/




var car = {
    brand:"toyota",
    speed:"64km/hr",
    fuelType:"diesel",
    color:"black",
    name:"lexus",
    model:"2019",
    horsePower:"471",
    engineType:"v8",
    sound:function (){
        console.log("It vooms.");
        
    },
    indicator:function(){
        console.log("moving indicators.");
        
    }

}
for(let item in car){
console.log(item +" " +car[item]);
}
console.log(car.sound());
console.log(car.indicator());




var lake = {
    name:"Victoria",
   chemicalElement :"oxygen",
    size:"large",
    color:"colorless",
    location:"Uganda",
    depth:"47meters",


    formation:function (){
        console.log("By downwarping");
        
    },
    uses:()=>{
        console.log("Fishing,transport,etc.");
        
    }
}
for(let item in lake){
console.log(item +" " +lake[item]);
}
console.log(lake.formation);
console.log(lake.uses());




var forest = {
    name:"Mabira",
    type:"rain forest",
    size:"large",
    color:"green",
    location:"Uganda",
    kingdom:"plantae",

    importance:function (){
        console.log("It provides firewood.");
        
    },
    destruction:function(){
        console.log("Burning");
        
    }

}
for(let item in forest){
console.log(item +" " +forest[item]);
}
console.log(forest.importance);
console.log(forest.destruction);






function country(name,continent,language,natives,populatiotn,commonClimate,head){
    this.name
    this.continent
    this.language
    this.natives
    this.populatiotn
    this.commonClimate
    this.head
    this.importance
    this.culture 
}
var Sweden =new country ()
   Sweden.name="Sweden",
   Sweden.continent="Europe",
   Sweden.language="Swiss",
   Sweden.natives="Swedish",
   Sweden.populatiotn="150,000",
   Sweden.commonClimate="winter",
   Sweden.head="president",
   Sweden.importance=function (){
        console.log("For a belonging.");
        
    },
    Sweden.culture=function(){
        console.log("They don't eat insects.");
        
    }


for(let item in country){
console.log(item +" " +country[item]);
}
console.log(country.importance());
console.log(country.culture());

var Uganda =new country ()
   Uganda.name="Uganda",
   Uganda.continent="Africa",
   Uganda.language="English",
   Uganda.natives="Ugandans",
   Uganda.populatiotn="2,000,000",
   Uganda.commonClimate="summer",
   Uganda.head="president",
   Uganda.importance=function (){
        console.log("For a belonging.");
        
    },
    Uganda.culture=function(){
        console.log("They have different kingdoms.");
        
    }


for(let item in country){
console.log(item +" " +country[item]);
}
console.log(country.importance());
console.log(country.culture());

