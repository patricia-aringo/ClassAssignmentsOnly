/* OBJECT SHOES
This object shoes takes on the various attributes of shoes sold in shop and these are;
name = shoe name
type = type maybe closed or open
color = color shoe
size = size of the shoe
brand = manufacture e.g bata
orign = country of manufacturing
material = material used to make shoe e.g leather
price = price of the shoe

Methods of SHOE 

wornwith = recommended matching clothes with the shoe
cleaningmethod= how the shoe can be cleaned 

 */
function shoes(name, type, color, size, brand, origin, material, price) {

    this.name = name;
    this.type = type;
    this.color = color;
    this.size = size;
    this.brand = brand;
    this.origin = origin;
    this.material = material;
    this.price = price;


    wornwith: () => {

        console.log("This shoes is worn with African wear");
    }
    cleaningmethod: () => {

        console.log("We clean is a semi-wet cloth");
    }
}



/* OBJECT FURNITURE 
This object furniture takes on the properties of furniture at a workshop
name = name of the furniture e.g chair
make = raw material to make the furniture can be wooden 
legs = number of the legs for that furniture
color = colo of the furnitire
price = price of the furniture item
size = size of the furnitire
state = state of furnitire item can be used or new 

Methods of FURNITURE

usedfor = the use of the furniture that is either sleeping, sittng etc
maintanence = describes how this furniture can be maintained in shape like proper use

 */

function furniture(name, make, legs, color, price, size, state) {

    this.name = name;
    this.make = make;
    this.legs = legs;
    this.color = color;
    this.price = price;
    this.size = size;
    this.state = state;

    usedfor: () => {

        console.log("it is used for sitting");
    }

    maintanence: () => {

        console.log("it is should not be over loaded");
    }


}

/* OBJECT PLANTS 
This object plants takes on the properties of plants and these are 
name = name of plant
type = type plant can be a tree, flower plant etc
fruits = the name of fruit produced by the plant
seedtype = the type of seeds produced that is either mono or dicotyledonous seeds
roots = the type of roots of the plants e.g prop roots
leafcolor = the color of the leaves of the plant 
flowerstate =  whether the plant is flowering or non flowering

Methods of PLANTS

useofplant = tells the use of this plant e.g food, shelter from trees
howtoplant = describes the way the plant is planted

 */

function plants(name, type, fruits, seedtype, roots, leafcolor, flowerstate) {

    this.name = name;
    this.type = type;
    this.fruits = fruits;
    this.seeds = seedtype;
    this.roots = roots;
    this.leafcolor = leafcolor;
    this.flowerstate = flowerstate;

    useofplant: () => {

        console.log("it is used for... ");
    }

    howtoplant: () => {

        console.log("it is planted by... ");
    }


}

/* OBJECT BankAccount
This object BankAccount takes on the properties of any bank account by owned by anyone
bankname = the name of the bank where the account is like stanbic
accountownername = name of the bank account owner
accountid = an alpha-numeric unique ID of an account 
accounttype = type of bank account e.g savings, fixed deposit etc
openingdate = opening date of the accounts
currentbalance = the current balance of the account
statement = statement of the transactions done on the account

Methods of BankAccount

deposit = owner of the bank account can depsit money on their accounts
withdraw = onwners can withdraw money from their bank accounts

 */


function BankAccount(bankname, accountownername, accountid, accounttype, openingdate, currentbalance, statement) {

    this.bankname = bankname;
    this.accountownername = accountownername;
    this.accountid = accountid;
    this.accounttype = accounttype;
    this.openingdate = openingdate;
    this.currentbalance = currentbalance;
    this.statement = statement;

    deposit: () => {

        console.log("you can deposit money on this account by ");
    }

    withdraw: () => {

        console.log("you can withdraw money from ths account ");
    }


}

/* OBJECT UTENSIL
This object utensil is described by the following properties
name =  name of the untesil
type = type can be cutlery, plates, cups
color = colour of the untensil
shape = shape of the utensil
make = material of the utensil that is either metalic of plastic or melamine
itemsetnumber = number of items that complete a full set of the utensil e.g 12 (dozen) of spoons 
price = the price of the utensils 

Methods of Utensil

clean = describes how the utensil is cleaned
usedwhen = when a utensil is used can be during food preparation, eating , drinking etc

 */



function utensil(name, type, color, shape, make, itemsetnumber, price) {

    this.name = name;
    this.type = type;
    this.color = color;
    this.shape = shape;
    this.make = make;
    this.itemsetnumber = itemsetnumber;
    this.price = price;



    cleanby: () => {

        console.log("it is cleaned by ");
    }

    usedwhen: () => {

        console.log("it is used when ");
    }


}

/* OBJECT BUILDING
Properties of the building anywhere can be described in the following ways 
name = name of the building
owner = owner of the bulding
type = type of building can be a flat, bungalow etc
age = age of the buiding
valuation = current valuation of the building
roomnumber = number of rooms in the building
sizeoccupied = the size of the land occupied by the buiding 
loaction = location of the builing 

Methods of Building

purpose = purpose of the building e.g accomodation of people, for sales and trade, services like hospitals, office premises
constructedby = how the building was constructed

 */


function building(name, owner, type, age, valuation, roomnumber, sizeoccupied, location) {

    this.name = name;
    this.owner = owner;
    this.type = type;
    this.age = age;
    this.valuation = valuation;
    this.roomnumber = roomnumber;
    this.sizeoccupied = sizeoccupied;
    this.location = location;

    purpose: () => {

        console.log("it is used by/for ...");
    }

    constructedby: () => {

        console.log("who and how it was constructed...");
    }


}


/* OBJECT INSECT
Properties of the building anywhere can be described in the following ways 

name= name of insect
legs= number of legs
color= color of insect
gender= gener of insect
bodyshape= body shape of insect
skeleton= skeleton of the insect
wings= presence of wings or not

Methods of Insect 

movement= describes how the insect moves
diseasescaused= the diseases caused by the insect 

 */

function insect(name, legs, color, gender, skeleton, bodyshape) {
    this.name = name
    this.legs = legs
    this.color = color
    this.gender = gender
    this.skeleton = skeleton
    this.bodyshape = bodyshape
}
movement: () => {

    console.log("it moves by ...");
}

diseasescaused: () => {

    console.log("is causes diseases such as ");
}