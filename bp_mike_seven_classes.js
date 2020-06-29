// create 7 classes, 7 objects, 2 methods of each class
// create 7 objects in those clases, create atleast 2 methods of each class

/*
var animal={
    name:'monkey', spicies: 'mammal', life_span: 100, color: 'black', 
    cry:function(){
        console.log('it charters');
    } 
}



for(item in animal){
    console.log(item +'\t \t '+ animal[item])
}

animal.cry();
*/

// oop
/*
function laptop(name, color, size, os, modle, brand) {
    this.nmae = name;
    this.color = color;
    this.size = size;
    this.os = os;
    this.modle = modle;
    this.brand = brand;
}

var laptop1 = new laptop('hp', 'silver', '17 inch', 'windows', 'pavilion', 'hp');
console.log(laptop1);
var laptop2 = new laptop('dell', 'black', '20 inch', 'windows', 'latitude', 'dell');
console.log(laptop2);

for (item in laptop1) {
    console.log(  item + '\t \t ' + laptop1[item])
}
console.log('\n \n')
for (item in laptop2) {
    console.log(item + '\t \t ' + laptop2[item])
}
*/


//class 1
/*
function shoes(name, color, size,gender, brand) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.gender = gender;
    this.brand = brand;
}

var shoe = new shoes('vanz', 'black', '40', 'men', 'Adidas');
console.log(shoe);
var shoe2 = new shoes('high heal', 'pink', '42', 'female', 'kitwe made');
console.log(shoe2);

for (item in shoe) {
    console.log(  item + '\t \t ' + shoe[item])
}
console.log('\n \n')
for (item in shoe2) {
    console.log(item + '\t \t ' + shoe2[item])
}
*/

//class 2
/*
function vehicle(name, color, size, version, brand) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.version = version;
    this.brand = brand;
}

var bmw = new vehicle('BMW', 'black', '4 seater', 'v 8', 'BMW');
console.log(bmw);
var van = new vehicle('Nissan', 'white', '15 seater', 'model 2019', 'toyota');
console.log(van);

for (item in bmw) {
    console.log(  item + '\t \t ' + bmw[item])
}
console.log('\n \n')
for (item in van) {
    console.log(item + '\t \t ' + van[item])
}

*/

//class 3
/*
function school(name, no_students, location, level) {
    this.name = name;
    this.no_students = no_students;
    this.location = location;
    this.level = level;
}

var pretty_palz = new school('pretty pals', '300', 'kla', 'kindergaten');
console.log(pretty_palz);
var muk = new school('muk', '3 m', 'makerere', 'university');
console.log(muk);

for (item in pretty_palz) {
    console.log(  item + '\t \t ' + pretty_palz[item])
}
console.log('\n \n')
for (item in muk) {
    console.log(item + '\t \t ' + muk[item])
}

*/

//class 4
/*
function house(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
}

var tent = new house('Riham tents', 'orange', '20 meters');
console.log(tent);
var flat = new house('sky crapper', 'sky blue', '100 km');
console.log(flat);

for (item in tent) {
    console.log(  item + '\t \t ' + tent[item])
}
console.log('\n \n')
for (item in flat) {
    console.log(item + '\t \t ' + flat[item])
}
*/

//class 5
/*
function celebrity(name, skin_color, origine, job, no_followers) {
    this.name = name;
    this.skin_color = skin_color;
    this.origine = origine;
    this.job = job;
    this.no_followers = no_followers;
}

var sterling = new celebrity('sterling', 'black', 'England', 'Soccer player', 'afew milionz');
console.log(sterling);
var trump = new celebrity('Trump', 'white', 'USA', 'president', 'countles');
console.log(trump);

for (item in sterling) {
    console.log(  item + '\t \t ' + sterling[item])
}
console.log('\n \n')
for (item in trump) {
    console.log(item + '\t \t ' + trump[item])
}
*/

//class 6

/*
function country(name, population, continent, president) {
    this.name = name;
    this.population = population;
    this.continent = continent;
    this.president = president;
}

var uganda = new country('Uganda', '47 m', 'Africa', 'M7');
console.log(uganda);
var brazil = new country('Brazil', '50 m', 'south Americ', 'Ronaldinho');
console.log(brazil);

for (item in uganda) {
    console.log(  item + '\t \t ' + uganda[item])
}
console.log('\n \n')
for (item in brazil) {
    console.log(item + '\t \t ' + brazil[item])
}
*/


//class 7
function my_class(name, class_no, topic, no_properties,) {
    this.name = name;
    this.class_no = class_no;
    this.topic = topic;
    this.no_properties = no_properties;
}

var class6 = new my_class('country', 'six', 'countries', 'four');
console.log(class6);
var this_class = new my_class('my class', 'seven', 'my classes', 'four');
console.log(this_class);

for (item in class6) {
    console.log(  item + '\t \t ' + class6[item])
}
console.log('\n \n')
for (item in this_class) {
    console.log(item + '\t \t ' + this_class[item])
}
console.log('\n \n')
console.log('the end \n black lives matter')