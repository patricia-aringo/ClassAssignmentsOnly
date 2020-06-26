//first function. Concerning properties of programming languages
function languages(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
this.name = name;
this.founder = founder;
this.symbol = symbol;
this.specialty = specialty;
this.disadvantage = disadvatage;
this.advantange = advantange;
this.prerequisites = prerequisites;
this.printOutput = () =>{console.log("How language is printed")};
this.declareVariable= () =>{console.log("How variable is declared")};
}

// SECOND function.Javascript details
function Javascript(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("JS output syntax: console.log(OUTPUT)")};
    this.declareVariable=()=>{console.log("var variableName")};
}
//inheriting the 'javascript object'
Javascript.prototype = new Javascript();
var js = new Javascript("Javascript","Brendan Eich","JS","web","single-threaded","popular","none");
js.printOutput();

//THIRD function. Java details
function Java(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("Java output syntax:'System.out.println('OUTPUT') ")};
    this.declareVariable=()=>{console.log("String variableName")};
}
//inherit Java object
Java.prototype = new Java();
var java = new Java("Java","James Gosling","Coffee","apps","memory consumer","mulithreaded","none");
java.printOutput();

//FOURTH function. Ruby details
function Ruby(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("Ruby output syntax: puts 'OUTPUT' ")};
    this.declareVariable=()=>{console.log("variableName")};
}
//inheriting 'Ruby' object
Ruby.prototype = new Ruby();
var ruby = new Ruby("Ruby","Yukihiro","Ruby stone","web","Slow runtime","flexible","none");
ruby.printOutput();

//FIFTH function. Python details
function Python(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("Python output syntax: print 'OUTPUT'")};
    this.declareVariable=()=>{console.log(" variableName")};
}
//inheriting 'Python' object
Python.prototype = new Python();
var python = new Python("Python","Guido van Rossum","snake","app","memory consumer","versatile ","none");
python.printOutput();

//SIXTH function. C details
function C(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("C output syntax: printf('OUTPUT')")};
    this.declareVariable=()=>{console.log("String variableName")};
}
//inheriting 'C' object
C.prototype = new C();
var c = new C("C","Dennis Ritchie","C","game dev","difficult to debug","powerful and efficient","none");
c.printOutput();


//SEVENTH function. PHP details
function PHP(name,founder,symbol,specialty,disadvatage,advantange,prerequisites){
    languages.call(this,name,founder,symbol,specialty,disadvatage,advantange,prerequisites)
    this.printOutput=()=>{console.log("PHP output syntax: print 'OUTPUT' ")};
    this.declareVariable=()=>{console.log("$variableName")};
}
//inheriting 'php' object
PHP.prototype = new PHP();
var php= new PHP("PHP","Rasmus Lerdof","PHP","web","Weak type","flexible","none");
php.printOutput();

