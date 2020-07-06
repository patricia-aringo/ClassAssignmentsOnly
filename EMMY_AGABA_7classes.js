
// A
class Square{
    constructor (_height,_width,_age,_color,_author,_country,_year) {
               
        console.log("Square is a shape!");
                
        this.height = _height;
        this.width = _width;
        this.age = _age;
        this.color = _color;
        this._author = _author;
        this.country = _country;
        this.year = _year;
    }

    getArea (){
        return this.width * this.height;
        
    }
    
    getPerimeter (){
        return 2 * this.width + 2 * this.height;
    }
}  
let mySquare1 = new Square(5, 3, "21 years", "orange", "Galilee", "Greece", "454 B.C");
let mySquare2 = new Square(100, 23, "30 years", "black", "Sultan Ozman","2020 O.L" );


console.log(mySquare1.getArea());
console.log(mySquare2.getArea());

console.log(mySquare1.getPerimeter());
console.log(mySquare2.getPerimeter());


//B
class Orange{

    constructor (){
        console.log ("Oranges are juicy");

}
}
let DOrangeX = new Orange();
let SOrangeC = new Orange();

//C
function Apple (type, periodofgrowth, countryoforigin, weather, price, foodreceipe,fertilizer)
{
    this.type = type;
    this.periodofgrowth = periodofgrowth;
    this.countryoforigin = countryoforigin;
    this.weather = weather;
    this.price = price;
    this.foodreceipe = foodreceipe;
    this.fertilizer = fertilizer;
}

function JackFruit(type, periodofgrowth, countryoforigin, weather, price, foodreceipe,fertilizer){
    Apple.call(this,type, periodofgrowth, countryoforigin, weather, price, foodreceipe,fertilizer)
}
var Apple1 = new Apple ('fruit', '4 months', 'Uganda', 'humid', '200 UGX', 'ApplePie', 'Nitrous X12')
var JackFruit2 = new JackFruit ('fruit', '5 months', 'dry', '20 UGX','JackCider', 'JackApple', 'SodiumPhosphate G5')
console.log(Apple1);
console.log(JackFruit2);

//D
function furniture (type, machinery, model, color, countryoforigin, price, shape){
    this.type = type,
    this.machinery = machinery,
    this.model = model,
    this.color = color,
    this.countryoforigin = countryoforigin,
    this.price = price,
    this.shape = shape

    this.furniture_name
}
    var furniture1 = new furniture ("Oak", "Sawmachine", "Chair X12", "maroon", "China", "USD 590.09", "oval");
    var furniture2 = new furniture ("Glass", "Chisel", "XG:234i", "white", "Turkey", "UGX 34M", "rectangular");
    
    furniture1.furniture_name=()=>{
        console.log("It's state of the art, desgin");
    }

    furniture2.furniture_name=()=>{
        console.log("Glass is rare.");
    }

    console.log(furniture1.type);
    console.log (furniture2.model);    
    
//E
var car = { 
        
        modal: "Toyota",
        tyre: "Melted_Rubber",
        color: "Silver",
        year: 2005,
        fuel: "Diesel",
        transmission: "Manual",
        battery: "Powdered",

        drive:()=>{
            console.log("Mercedez Benz is the class, G");
        },

        steering:()=>{
            console.log("The steering wheel is on the left");
        }

    }

    car.drive();
    car.steering();

//F
class Rectangle{
    constructor (_height,_width,_age,_color,_author,_country,_year) {
               
        console.log("The Rectangle is a shape!");
        
        this.height = _height;
        this.width = _width;
        this.age = _age;
        this.color = _color;
        this._author = _author;
        this.country = _country;
        this.year = _year;
    }

    getArea (){
        return this.width * this.height;
    }
    
    getPerimeter (){
        return 2 * this.width + 2 * this.height;
    }
}  
let myRectangle1 = new Rectangle(34, 8, "11 years", "blue", "Shaka Zulu", "Africa", "1834");
let myRectangle2 = new Rectangle(23, 89, "233 years", "indigo", "Julius Ceasar","890 A.D" );


console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

console.log(myRectangle1.getPerimeter());
console.log(myRectangle2.getPerimeter());


//G
var school = {
    name: "Makerere",
    faculty: "Science & Technology",
    dean: "Prof. Nuwagaba",
    year:"2020",
    occupation: "tecahing",
    subject: "civil engineering",
    tribe: "Mukiga",

    Politics:()=>{
        console.log("die-hard fan of NRM");
    },

    height:()=>{
        console.log("He is a short man.");
    }   
}

console.log(school.year);console.log(school.name);