//First class
//Creating a class television
var televistion = {
    //Creating properties for television
    Brand:"hisence",
    Size:"32 inch",
    display:"HD",
    weight:"1.2kgs",
    Resolution:"1920 x 1080p",
    smart:"Yes",
    No_of_HDMI_input:2,
    //Creatiing methods decoder and material in television
    decoder:()=>{
        console.log("it comes with an inbuild decoder");
    },
    material:()=>{
        console.log("it is made of a semi plastic material to reduce chances of breaking");
    }
}
//Calling the method decoder in television
televistion.decoder();
//End of first class

//Second Class
//Creating a class phone
var phone = {
    //creating properties for phone
    name:"Iphone 11",
    display:"5.8 inches",
    os: "ios 13",
    memory:"256 GB",
    Battery:"Non-removable Li-on 3190mAh",
    bluetooth:"5.0",
    Camera:"triple 12mp",
    //creatiing methods biometric and network in phone
    biometric:()=>{
        console.log("it users the fingure print and face ID to unlock");
    },
    Network:()=>{
        console.log("it users 2G,3G and 4G");
    }
}
//calling the value in the parameter name in the phone class
console.log(phone.name);
//End of second class

//Third class
//creating a class wine with parameters
function wine(name,price,size,type,caregory,sweet_dry_scale,region){
    this.name = name,
    this.price = price,
    this.size = size,
    this.type = type,
    this.caregory = caregory,
    this.sweet_dry_scale = sweet_dry_scale,
    this.region = region
    this.food_pair  
}
//Creating objects wine1 and wine2 from the wine class
var wine1 = new wine("La Crema","$20.99","750.0ml","white wine","chardonnay","Dry","United States");
var wine2 = new wine("Apothic Red","$57.98","750.0ml","Red wine","Proprietary Red Blend","Sweet","California");
//creating a method of food pair for wine1 and wine2
wine1.food_pair=()=>{
    console.log("it goes best with chicken or shellfish");
}
wine1.food_pair=()=>{
    console.log("it goes best with lamb or beef");
}
//calling the name value for object wine1
console.log(wine1.name);
//End of third class

//Fourth class
//Creating the class employee
function employee(){
    //Creating the properties for the class employee
    this.name
    this.age
    this.gender
    this.Work_time
    this.salary
    this.depertment
    this.status
    this.years
    this.skills
}
//Creating the object emp1 from the class employee
var emp1 = new employee();
//Setting values for the properties of employee in the emp1 object
    emp1.name = "Micheal";
    emp1.age = "34 year";
    emp1.gender = "male";
    emp1.Work_time = "Part time";
    emp1.salary = "300,000";
    emp1.depertment = "marketing";
    emp1.status = "Married";
    emp1.years = () =>{
        console.log("Micheal has worked with us for 5 years");
    };
    emp1.skills=()=>{
        console.log("Micheal has skills in digital marketing")
    }
//calling the value in the name property in the emp1 object
console.log(emp1.name);
//End of fourth class

//Fifth class
//Creating the class customer
function customer(){
    //Creating the properties for the class customer
    this.name
    this.age
    this.gender
    this.location
    this.phoneNumber
    this.email
    this.product_bought
    this.sales
    this.service
}
//Creating the object customer1 from the class customer
var customer1 = new customer();
    customer1.name = "Ignatius";
    customer1.age = "30 years";
    customer1.gender = "male";
    customer1.location = "kansanga";
    customer1.phoneNumber = "070xxxxxxx";
    customer1.email = "example@gmail.com";
    customer1.product_bought = "Iphone 11 pro";
    customer1.sales = ()=>{
        console.log("Ignatius buys from us several times")
    }
    customer1.service = () =>{
        console.log("Ignatius is happy with our services")
    }
//calling the value in the name property for customer1
console.log(customer1.name);
//End of fifth class

//Sixth class
//Creating a class city
function city(name,size,population,location,leader,country){
    this.name = name
    this.size = size
    this.population = population
    this.location = location
    this.leader = leader
    this.country = country
    this.planner  
    this.duty
}
//Creating an object city1 from the class city
var city1 = new city("kampala","176km^2","1.507 million","central uganda","Load mayor","uganda");
//Creating a method planner for the object city1
city1.planner= ()=>{
    console.log("kampala is planned for but KCCA")
}
city1.duty=()=>{
    console.log("kampala is the capital city")
}
//Calling the method planner from the city1 object 
city1.planner();
//End of sixth class

//Creating a Seventh Class
//Creating the class airplane
var airplane={
    name:"M-28 twin turboprop aircrafe",
    passengers:19,
    length:"13.10m",
    height:"4.90m",
    wingspan:"22.06m",
    range:"1,592km",
    manufacturer:"PZL Mielec company",
    flying:()=>{
        console.log("the M28 is designed for short take-off and landing");
    },
    design:()=>{
        console.log("The M28 has a semi-monocoque all-metal sturcture");
    }
}
//End of Seventh class


