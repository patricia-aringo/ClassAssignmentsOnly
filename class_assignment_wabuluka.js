const dashed = ()=>{
    console.log('---------------------------------------------')
}
var animal = {
    name: 'monkey',
    species: 'mammal',
    legs: 4,
    color: 'Black',
    sex: 'male',
    type: 'domestic',
    skin: true,


    cry: ()=>{
        return `${animal.name} chartters`
    },

    walk: ()=>{
        return `${animal.name} walks on ${animal.legs}`
    }
}
dashed()
console.log(animal.cry())
console.log(animal.walk())
dashed()

var Person = {
    name: 'Davies Wabuluka',
    race: 'black',
    country: 'Uganda',
    religion: 'Christian',
    age: 26,
    school: 'refactoty',
    pairOfShoes: 10,

    presentMe: ()=>{
        return `My name is ${Person.name}`
    },

    yearOfBirth: ()=>{
        return `I was born in` + 2020 - `${Person.age}`
    }

}

var Kitchen = {
    ownerName: 'Davies Wabuluka',
    numberOfPans: 20,
    location: 'Kampala',
    typeOfFloor: 'marble',
    stairCase: true,
    cooker: false,
    numberOfDoors: 2,

    cook: () =>{
        return `${Kitchen.ownerName} cooks in his kitchen of ${Kitchen.numberOfPans}s`;
    },

    ownership: ()=>{
        return `${Kitchen.ownerName} owns this Kitchen`;
    }

    
}

var phone ={
    name: 'Samsung',
    model: 'Galaxy',
    year: 2019,
    ram: 2,
    storage: 32,
    color: 'Black',
    battery: 4000, 

    identify: ()=>{
        return `I own a ${phone.name} ${phone.model}`;
    },

    phoneDesc: ()=>{
        return `${phone.name} has ${phone.storage} GB`;
    }
}


var university = {
    name: 'MUK',
    location: 'Kampala',
    number: 50000,
    religion: none,
    colleges: 8,
    vice: 'Nawangwe',
    halls: 6,

    universityLocation: () => {
        return `${university.name} university is located in ${university.location}`;
    },

    universityPopulation: ()=>{
        return `${university.name} has a population of ${university.population}`;
    }

}

var country = {
    name: 'Uganda',
    continent: 'Africa',
    race: 'Black',
    population: 36,
    capital: 'Kampala',
    tribes: 15,
    currentPresident: 'M7',

    myCountry: ()=>{
        return `My country is ${country.name}`;
    },

    countryCity: ()=>{
        return `${country.name} 's capital city is ${country.city}`;
    }
}

var bicycle = {
    owner: 'Davies Wabuluka',
    make: 'BMX',
    nature: 'sports',
    age: 5,
    rimSize: 20,
    gears: 5,
    color: 'Black',

    bicId: ()=>{
        return `${bicycle.owner} has ${bicycle.make} bike`;
    },

    bikeYear: ()=>{
        return 'Year of manufacture is ' + (2020 - bicycle.age);
    }
}