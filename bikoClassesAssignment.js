//Declare a movie class
var movies = {
    /*Give The movie class
    seven propertie (name, genre, duration,releaseDate, gross. producer, director)*/
    name:"salt",
    genre:"action",
    duration:"135 mins",
    releaseDate:"15th Sept 2018",
    gross:150000000,
    producer:"jon favreau",
    director:"steven spielberg",
    
    //create two methods for the fan reactions to the movies
    cinemaReaction:() =>{
        console.log("This is so bad ass!!!");
    },
    overseasReaction:() =>{
        console.log("Great movie");
    }

}
//call the methods
movies.cinemaReaction();
movies.overseasReaction();

//Declare a books class
var books = {
    /*Give The books class
    seven propertie (name, genre, pages, releaseDate, copiesSld, producer, writer)*/
    name:"the client",
    genre:"thriller",
    pages:620,
    releaseDate:"23rd Sept 1998",
    copiesSold:5000000,
    producer:"universal",
    writer:"John Grisham",
    
    //create two methods for the fan reactions to the books
    localReaction:() =>{
        console.log("Intriguing book!");
    },
    tourReaction:() =>{
        console.log("Great read");
    }

}
//call the methods
books.localReaction();
books.tourReaction();

//Declare a hotels class
var hotels = {
    /*Give The hotels class
    seven propertie (name, location, theme, openingDate, stars, capacity, owner)*/
    name:"Hilton",
    location:"Kampala",
    theme:"elite",
    openingDate:"10th March 2010",
    stars:"4 star",
    capacity:150,
    owner:"Hilton group",
    
    //create a method for the guest experience
    guestExperience:() =>{
        console.log("There is confort and privacy");
    },

    // create a method for the staff experience
    staffExperience:() =>{
        console.log("The pay isn't great but the clients tip well");
    }

}
//call the methods
hotels.staffExperience();
hotels.guestExperience();

//Declare a ISP class
var isp = {
    /*Give The isp class
    seven propertie (name, category, coverage, clientBase, maxSpeed, pricing, headOfficeLocation)*/
    name:"MTN",
    category:"Telecom",
    coverage:"whole of Uganda",
    clientBase:20000000,
    maxSpeed:"500 MBps",
    pricing:"5000 per GB",
    headOfficeLocation:"Kampala",
    
    //create a method for slogan
    slogan:() =>{
        console.log("Everywhere you go");
    },
    //create a method customer care answer
    customerCare:() =>{
        console.log("Yellow thank you for calling MTN how can we help you?");
    }

}
//call the methods
isp.slogan();
isp.customerCare();

//Declare a avengers class
var avengers = {
    /*Give The avengers class
    seven properties (character, name, DOB, power, weapon, sideKick, origin)*/
    character:"Black panther",
    name:"T'challa",
    DOB:"23rd September 1988",
    power:"speed and agility",
    weapon:"vibranium panther suit",
    sideKick:"Shuri",
    origin:"Wakanda",
    
    //create a method for avenger's famous line
    famousLine:() =>{
        console.log("Wakanda forever");
    },
    //create method avenger's signature sound
    sound:() =>{
        console.log("gggrrrrr");
    }

}
//call the methods
avengers.famousLine();
avengers.sound();

//Declare a motorcycle class
var motorcycle = {
    /*Give The motorcycle class
    seven propertie (name, make, horsePower, topSpeed, tyreSize, consumption, price)*/
    name:"Ninja",
    make:"Ducati",
    horsePower:680,
    topSpeed:"240Kph",
    tyreSize:"15 inches",
    consumption:"3.6CC",
    price:"42000$",
    
    //create two methods for the rider's reaction and bike's growl
    riderReaction:() =>{
        console.log("WOAH");
    },
    growl:() =>{
        console.log("bbbrrrr");
    }

}
//call the methods
motorcycle.growl();
motorcycle.riderReaction();

//Declare a fruits class
var fruits = {
    /*Give The fruits class
    seven propertie (name, type, color, taste, growingPeriod, origin, price)*/
    name:"apple",
    type:"citrus",
    color:"green",
    taste:"sweet",
    growingPeriod:"6 years",
    origin:"Kabale",
    price:"1000shs",
    
    //create two methods for the fruits class
    fruitSound:() =>{
        console.log("Crunch");
    },
    fingerlickingSound:() =>{
        console.log("thp thp thp");
    }

}
//call the methods
fruits.fruitSound();
fruits.fingerlickingSound();
