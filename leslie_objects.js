//longhand version of creating objects
var course = new Object();
course.title = "Javascript";
course.instructor = "Osman Buyondo";
course.company = "Refactory";
course.level = 1;
course.published = "true";
course.views = 24;
course.updateViews= function() {
    return ++course.views
}

//shorthand version
/*var course = {
    title: "Javascript",
    instructor: "Osman Buyondo",
    company: "Refactory",
    level: 1,
    published: "true",
    views: 24,
    updateViews: ()=> {
        return ++course.views 
    };
    goal: function(){
        console.log("Advancing Uganda's tech industry")
    };
}*/

console.log(course.views);
course.updateViews();
console.log(course.views)

//using object constructors
function Course(title,instructor,company,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.company = company;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews= function() {
        return ++this.views
    };
    this.goal = ()=> {
        console.log("Advancing Uganda's Tech Industry")
    };

}

var courses = [
    new Course("Javascript","Osman Buyondo","Refactory",1,"true",24),
    new Course("HTML & CSS","Samson Kapeyi","Refactory",1,"true",24)
];


//var course01 = new Course("Javascript","Osman Buyondo","Refactory",1,"true",24);
//var course02 = new Course("HTML & CSS","Samson Kapeyi","Refactory",1,"true",24);

//console.log(courses[0].company);
//console.log(courses[1].goal());

function Africa(country,region,president,capitalcity,population,language) {
    this.country = country;
    this.region = region;
    this.president = president;
    this.capitalcity = capitalcity;
    this.population = population;
    this.language = language;
    this.motto = ()=> {
        console.log("For God and my Country")
    };
    this.slogan = ()=> {
        return "The Pearl of Africa"
    };
}
 var africas = [
    new Africa("Uganda","East Afica","YK Museveni","Kampala",40,000,000,"English"),
    new Africa("Rwanda","East Afica","Paul Kagame","Kigali",10,000,000,"Kinyarwanda")
 ];

var africa01 = new Africa("Uganda","East Afica","YK Museveni","Kampala",40000000,"English");
var africa02 = new Africa("Rwanda","East Afica","Paul Kagame","Kigali",10000000,"Kinyarwanda");


console.log(africa02);

function car (name,safety,performance,range,specs,autopilot) {
    this.name = name;
    this.safety = safety;
    this.performance = performance;
    this.range = range;
    this.specs = specs;
    this.autopilot = autopilot;
    this.interior = function(){
        console.log("spacious")
    };
    this.exterior = ()=> {
        return "aerodynamic"
    };
}

var car01 = car("Tesla","High impcat protection","Quickest acceleration","402mi","future of driving")

var watches = {
    brand:"rolex",
    country:"Switzerland",
    founder:"Hans wilsdorf",
    reliability:"waterproof",
    material:"gold",
    maintenance:"ease",
    precision: function() {
        console.log("high performance")
    }

};

var property = new Object();
    property.style = "bungalow";
    property.location = "bunamwaya";
    property.price = 450000000;
    property.status = "sale";
    property.district = "wakiso";
    property.plot = 7881;
    property.block = 265;
    property.appearance = function(){
        console.log("spacious")
    };
    property.design = ()=> {
        console.log("elegant")
    };

