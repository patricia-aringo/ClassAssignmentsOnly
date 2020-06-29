//Class of Mountain : 1
var mountain = {
    //Mountain properties 
    name: "Elgon",
    height: "12,000 km",
    location: "Eastern Uganda",
    coverage: "200 Sqkm",
    type: "Volcanic",
    status: "dormant",
    crater: false,
    //Mountain methods
    eruption: ()=>{
        console.log("Erupts with Lava if not in dormant state");
    },
    explosion: ()=>{
        console.log("Explodes with thrusts of rocks and molten magma into the atmosphere when it erupts");
    },
    expansion: ()=>{
        console.log("Occurs during eruption and the mountains expands due to molten magma, extreme heat and debris cooling the lava to form solidified magma");
    }
}

//Class of Ocean : 2
var waterBody = {
    //WaterBody properties
    name: "indian",
    type: "ocean",
    depth: "8,047 m",
    size: "70.56 million km²",
    length: "9,600 km",
    location: "20°S 80°E",
    waterType: "salt water",
    ranking: "3rd largest on earth",
    //WaterBody methods
    salinity: ()=>{
        console.log("Has got high salt levels in its waters");
    },
    freezing: ()=>{
        console.log("No fixed freezing point because of the high salinity levels");
    }   
}

//Class of planet : 3
var planet = {
    //Planet methods
    name: "Earth",
    ranking: "5th largest",
    size: "13,000 km in diameter",
    location: "3rd furthest from the sun",
    habitable: true,
    hasCore: true,
    coreSize: "7,100 km in diameter",
    //Planet methods
    rotation: ()=>{
        console.log("Ability of the planet t do a complete rotation at its axis");
    },
    revolution: ()=>{
        console.log("Ability of the planet to orbit the sun");
    }
}

//Class of continent : 4
var continent = {
    name: "Africa",
    ranking: "2nd largest",
    Area: "30.37 million km²",
    population: "1.216 billion",
    populationDensity: "36.4/km2",
    language: "1250–3000 native languages",
    country: 56,
    timezone: "UTC-1 to UTC+4",


}

//Class of satellite : 5
var satellite = {
    //Satellite properties
    name: "moon",
    type: "natural",
    distanceFromEarth: "384,400 km",
    periodOfOrbit: "27.3 Earth days",
    surfaceArea: "37,900,000 km",
    mass: "0.0735 × 1024 kg",
    surfacePressure: "3 × 10−15 bar",
    //Satellite methods
    motion: ()=>{
        console.log("The moon revolves around the earth in an elliptical orbit every 27.3 days");
    },
    tidalForce: ()=>{
        console.log("Ability of the moon to pull objects on earth like water towards itself by its gravitation pull");
    }

}

//Class of airplane : 6
var airplane = {
    //Airplane properties
    name: "Boeing 777-8",
    manufacturer: "Boeing Commercial Airplanes",
    color: "grey",
    passangers: 384,
    range: "8,730 nautical miles",
    Engine: "GE9X",
    cost: "$410.2 million",
    //Airplane methods
    takeoff: ()=>{
        console.log("The phase of flight in which an aerospace vehicle leaves the ground and becomes airborne");
    },
    drifting: ()=>{
        console.log("The deviation of an aircraft from a set course due to cross winds");
    },
    landing: ()=>{
        console.log("The phase of a flight where a flying aircraft returns to the ground");
    }
}

//Class of fridge : 7
var fridge = {
    //Fridge properties
    brand: "Hisense",
    type: "Chest",
    powerType: "DC",
    consumption: "50 watts",
    model: "112L DC",
    size: "120 Liters",
    weight: "50 kg", 
    //Fridge methods
    pullDown: ()=>{
        console.log('Time taken to cool the fridge from 25C to 4C degrees');
    },
    hoursOfAutonomy: ()=>{
        console.log('Time taken by the fridge to raise from 4C to 12C degrees');
    } 
}

//Class of insect
var insect = {
    //Insect properties
    name: "grasshopper",
    kingdom: "Animalia",
    phylum: "Arthropoda",
    class: "Insecta",
    order: "Orthoptera",
    body: "3 sections",
    legs: 6,
    //Insect methods
    locomotion: ()=>{
        console.log("It moves by flying in air");
    },
    breathing: ()=>{
        console.log("Breathes through spiracles");
    }
}
