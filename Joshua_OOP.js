/* 
    Defining class city
*/
var city = {
    name: "Rio de Janeiro",
    country: "Brazil",
    population: "6.32 million people",
    postal_Code: 20000-000,
    mayor: "Marcelo Crivella",
    city_description: () => {
        console.log("Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.")
    },
    language: () => {
        console.log("Mostly Portuguese")
    }
}

city.city_description();

/* 
    class television
*/
function television(brand, screen_size, resolution, color, model, weight, screen_type){
    this.brand = brand;
    this.screen_size = screen_size;
    this.resolution = resolution;
    this.color = color;
    this.model = model;
    this. weight = weight;
    this.screen_type = screen_type;
    
}
var television1 = new television("Hisense", 65, "1920 x 1080 Pixels", "Black", "65N3000UW", "5kg", "LED");
//console.log(brand)

for(let item in television1){
    console.log(item +": "+ television1[item])
}

/* 
    Class shirt
*/
function shirt (color, size, material, fabric_type, sleeve_length, manufacturer, countryOfOrigin){
    this.color = color;
    this.size = size;
    this.material = material;
    this.fabric_type = fabric_type;
    this.sleeve_length = sleeve_length;
    this.manufacturer = manufacturer;
    this.countryOfOrigin = countryOfOrigin;
}
short_sleeved = new shirt("Blue", "Small", "Linen","Broadcloth", "Short", "Nytil", "Uganda");

// looping through instance short_sleeved
for(let item in short_sleeved){
    console.log(item +": "+ short_sleeved[item])
}

/* 
    Class school
*/
var school = {
    name: "Mengo SS",
    headTeacher: "Kasita",
    location: "Bukesa",
    num_of_students: 1500,
    uniform_color: "white",
    motto: () => {
        console.log("Akwana Akila Ayomba");
    },
    sport_activities: () => {
        console.log("Football, Netball, Rugby, Athletics, Swimming, and many others");
    }
}
    // looping through the school class
        for(let item in school){
        console.log(item +": "+ school[item])
    }

    /* 
        defining class road
    */
    function road (route, surfaceType, constructors, contractor, weightCapcity){
        this.route = route;
        this.surfaceType = surfaceType;
        this.constructors = constructors;
        this.contractor = contractor;
        this.weightCapcity = weightCapcity;
        this.fromTo;
        this.hasSideWalk;
    }

    /* 
        creating an instance of a class
    */
    var jinjaRoad = new road("jinja", "Tarmac", "GoU", "CCC", "20 Torns")
        this.fromTo = () => {
            console.log("Kampala to Jinja");
        }
        this.hasSideWalk = () => {
            console.log("It has side walk in some parts");
        }

        
        // Printing the jinjaroad route
        console.log(jinjaRoad.route)


        /* 
            Defining class church
        */
        function church(){
            this.churchName;
            this.pastor;
            this.denomination;
            this.congretationSize;
            this.numOfServices;
            this.languageUsed;
            this.favHymn;
        }

        // Creating an instance of class church
        var clc = new church();
            clc.churchName = () => {
                console.log("Christian Life Church")
            }
            clc.pastor = "SSerwadda"
            clc.denomination = "Pentecostal"
            clc.congretationSize = 20000
            clc.numOfServices = 4
            clc.languageUsed = "Luganda"
            clc.favHymn = () => {
                console.log("To God Be The Glory")
            }

        // looping though instance of church

        for(let item in clc){
            console.log(item +": "+ clc[item]);
        }

        // defining class stadium

        function stadium () {
            this.name
            this.yearOfconstruction
            this.capacity
            this.owner
            this.eventsHosted = () =>{
                console.log("Football, Rugby, Cricket, concerts, Lilly, etc")
            }
            this.location
            this.slogan = () =>{
                console.log("chmapion stadium")
            }
        }

        // instance of class stadium

        var emirates = new stadium();
            emirates.name = "Emirates Stadium"
            emirates.yearOfconstruction = 2007
            emirates.capacity = 60000
            emirates.owner = "Arsenal FC"
            emirates.eventsHosted
            emirates.location = "North London"
            emirates.slogan;

            // printing slogan
            emirates.slogan()
