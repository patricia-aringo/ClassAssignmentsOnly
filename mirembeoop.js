function phone (name,size,weight,osversion,memory,batterylife,pixels){
    this.name=name;
    this.size=size;
    this.weight=weight;
    this.osversion=osversion;
    this.memory=memory;
    this.batterylife=batterylife;
    this.pixels=pixels;
    this.ringing=()=>{
        console.log('ringing');

    this.vibration=()=>{
        console.log('vuuuu');
    }
   
}


}

function smartphone(name,size,weight,osversion,memory,batterylife,pixels){
    phone.call(this,name,size,weight,osversion,memory,batterylife,pixels)
}
smartphone.prototype = new phone();
smartphone.prototype= new smartphone();
var smart1=new smartphone('sony', '5 inch','0.5g',6.0,'32 gb', '3800 mAPs', '20.7px');
var smart2=new smartphone('techno', '4.5 inch','0.4g',4.0,'16 gb', '3000 mAPs', '13px');
console.log(smart1);
console.log(smart2);



function university (name,population,founder,emblem,noofintakes,noofcampuses,location){
    this.name=name;
    this.population=population;
    this.founder=founder;
    this.emblem=emblem;
    this.noofintakes=noofintakes;
    this.noofcampuses=noofcampuses;
    this.location=location;
    this.performance=()=>{
        console.log('good');

    this.playingsoccer=()=>{
        console.log('attack');
    }
   
}


}

function government(name,population,founder,emblem,noofintakes,noofcampuses,location){
    university.call(this,name,population,founder,emblem,noofintakes,noofcampuses,location)
}
government.prototype = new university();
government.prototype= new government();
var university1=new government('Makerere', 100000,'government','kob',1,1, 'Kampala');
var university2=new government('Mbarara', 5000,'government','virtue',1,2, 'Mbarara');
console.log(university1);
console.log(university2);



function country (name,population,continent,code,GDP,president, currency){
    this.name=name;
    this.population=population;
    this.continent=continent;
    this.code=code;
    this.GDP=GDP;
    this.president=president;
    this.currency=currency;
    this.speaking=()=>{
        console.log('fast diarect');

    this.sport=()=>{
        console.log('athletics');
    }
   
}


}

function developed(name,population,continent,code,GDP,president, currency){
    country.call(this,name,population,continent,code,GDP,president, currency)
}
developed.prototype = new country();
country.prototype= new country();
var developed1=new country('USA', '600 million','North America','+14','90%','Trump','Dollar');

console.log(developed1);




function country (name,population,continent,code,GDP,president, currency){
    this.name=name;
    this.population=population;
    this.continent=continent;
    this.code=code;
    this.GDP=GDP;
    this.president=president;
    this.currency=currency;
    this.speaking=()=>{
        console.log('fast diarect');

    this.sport=()=>{
        console.log('athletics');
    }
   
}


}

function developed(name,population,continent,code,GDP,president, currency){
    country.call(this,name,population,continent,code,GDP,president, currency)
}
developed.prototype = new country();
country.prototype= new country();
var developed1=new country('USA', '600 million','North America','+14','90%','Trump','Dollar');

console.log(developed1);



function country (name,population,continent,code,GDP,president, currency){
    this.name=name;
    this.population=population;
    this.continent=continent;
    this.code=code;
    this.GDP=GDP;
    this.president=president;
    this.currency=currency;
    this.speaking=()=>{
        console.log('fast diarect');

    this.sport=()=>{
        console.log('athletics');
    }
   
}


}

function developed(name,population,continent,code,GDP,president, currency){
    country.call(this,name,population,continent,code,GDP,president, currency)
}
developed.prototype = new country();
country.prototype= new country();
var developed1=new country('USA', '600 million','North America','+14','90%','Trump','Dollar');

console.log(developed1);




function country (name,population,continent,code,GDP,president, currency){
    this.name=name;
    this.population=population;
    this.continent=continent;
    this.code=code;
    this.GDP=GDP;
    this.president=president;
    this.currency=currency;
    this.speaking=()=>{
        console.log('fast diarect');

    this.sport=()=>{
        console.log('athletics');
    }
   
}


}

function developed(name,population,continent,code,GDP,president, currency){
    country.call(this,name,population,continent,code,GDP,president, currency)
}
developed.prototype = new country();
country.prototype= new country();
var developed1=new country('USA', '600 million','North America','+14','90%','Trump','Dollar');

console.log(developed1);




function country (name,population,continent,code,GDP,president, currency){
    this.name=name;
    this.population=population;
    this.continent=continent;
    this.code=code;
    this.GDP=GDP;
    this.president=president;
    this.currency=currency;
    this.speaking=()=>{
        console.log('fast diarect');

    this.sport=()=>{
        console.log('athletics');
    }
   
}


}

function developed(name,population,continent,code,GDP,president, currency){
    country.call(this,name,population,continent,code,GDP,president, currency)
}
developed.prototype = new country();
country.prototype= new country();
var developed1=new country('USA', '600 million','North America','+14','90%','Trump','Dollar');

console.log(developed1);

//computer

function computer (name,model,OS,RAM,HDD,generation, size){
    this.name=name;
    this.model=model;
    this.OS=OS;
    this.RAM=RAM;
    this.HDD=HDD;
    this.generation=generation;
    this.size=size;
    this.speaker=()=>{
        console.log('bass');

    this.processingspeed=()=>{
        console.log('2.1 ghz');
    }
   
}


}

function desktop(name,model,OS,RAM,HDD,generation, size){
    country.call(this,name,model,OS,RAM,HDD,generation, size)
}
desktop.prototype = new computer();
computer.prototype= new computer();
var desktop=new computer('Dell', 'E6220','windows','8GB','500GB','2nd generation','13.3"');

console.log(desktop);




//plant
//bicycles
//child
