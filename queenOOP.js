//first object.

function school(name, unebNum, licence, district, location, sponsor, level) {

    this.name = name
    this.unebNum = unebNum
    this.licence = licence
    this.district = district
    this.location = location
    this.sponsor = sponsor
    this.level = level
}
var school1 = new school()
school1.name = "kampala parents";
school1.unebNum = "Ueb003";
school1.licence = "ug8976";
school1.district = "kampala";
school1.location = "central uganda";
school1.sponsor = "government";
school1.level = "primary";

console.log(school1.name);
for (let item in school1) {
    console.log(item + " " + school1[item]);
}

//second object.
function fruit() {
    this.name
    this.color
    this.shape
    this.size
    this.taste
    this.seed
}
var mango = new fruit();
mango.name = "dodo";
mango.color = "green";
mango.shape = "oval";
mango.size = "medium size";
mango.taste = "sweet";
mango.seed = "drupe";
mango.grow = () => {
    console.log("mangos grows on a mango tree");
}
mango.grow();
// third object.
var country = {
    name: "uganda",
    continent: "Africa",
    president: "Yoweri",
    population: "42000000",
    GDP: "27.46$",
    currency: "shillings",
    altitude: () => {
        console.log("its about 1,100 meters");
    }
}
country.altitude();

//Forth object
function book(name, color, size, pages, company, height, type) {

    this.name = name
    this.color = color
    this.size = size
    this.pages = pages
    this.company = company
    this.height = height
    this.type = type
}
var book1 = new book()
book1.name = "picfare";
book1.color = "grey";
book1.size = "small";
book1.pages = "12";
book1.company = "picfare uganda";
book1.height = "10inch";
book1.type = "exercise";

console.log(book1.company);
for (let item in book1) {
    console.log(item + " " + book1[item]);
}

//fifth objects.
function house() {
    this.name
    this.color
    this.shape
    this.plotNum
    this.blockNum
    this.type
    this.location
}
var house1 = new house();
house1.name = "bungalow";
house1.color = "light green";
house1.shape = "square";
house1.plotNum = 345;
house1.blockNum = 120;
house1.type = "rental";
house1.location = () => {
    console.log("its located in kampala district");
}
house1.location();

//sixth object.
var football = {
    team: "Manchester United",
    league: "Premier",
    tv: "DSTV",
    manager: "Ole Gunnar",
    captain: "Harry",
    country: "england",
    position: () => {
        console.log("its in fifth position");
    }
}
football.position();


// Seventh object

function trouser(name, size, brand, type, color, height, behavior) {

    this.name = name
    this.size = size
    this.brand = brand
    this.type = type
    this.color = color
    this.height = height
    this.behavior = behavior
}
var trouserType = new trouser()
trouserType.name = "jeans";
trouserType.size = 34;
trouserType.brand = "Levis";
trouserType.type = "tight";
trouserType.color = "navy blue";
trouserType.height = 115;
trouserType.behavior = "strenches";

console.log(trouserType.color);
for (let item in trouserType) {
    console.log(item + " " + trouserType[item]);
}