//The constructor method.
class worldCup {
    //The constructor sets the initial value for field sports and players.
    constructor(sports,players) {
      sports; 
      players;
      //worldCup has two parameters which is used to set the initial value of the field this.sports and this.players.
      this.sports = sports;
      this.players = players;
    }
  }
  //Defining a constructor for the class worldCup.
  const worldCup1 = new worldCup('Tennis', 'Roger Federer');
  const worldCup2 = new worldCup('Hockey', 'Diego Villa');
  console.log(worldCup1);
  console.log(worldCup2);

// A named class expression.
let Forest = class Trees {
    //The constructor sets the initial value for field height and width.
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  //This logs the name of the class to the console.
  console.log(Forest.name);

  //Using of Private fields in class with # prefix.
  class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {    
      this.#height = height;
      this.#width = width;
    }
  }

/*The extends keyword is used in class declarations or class expressions to 
      create a class as a child of another class.*/
  class Bird { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Crow extends Bird {
    constructor(name) {
      // call the super class constructor and pass in the name parameter
        super(name);   
    }
  
    speak() {
      console.log(`${this.name} crows.`);
    }
  }
  
  let sound = new Crow('Blair');
  //Invoking speak
  sound.speak(); 

/*classes cannot extend regular objects. If you want to inherit from
 a regular object, you can instead use Object.setPrototypeOf():*/
  const Amphibian = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  class Frog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // If you do not do this you will get a TypeError when you invoke speak
  Object.setPrototypeOf(Frog.prototype, Amphibian);
  
  let d = new Frog('Chewie');
  // Ivoking speak.
  d.speak(); 

  /*Use of Species function,species specifies a function-valued
     property that the constructor function uses to create derived objects*/
     class MyArray extends Array {
        // Overwrite species to the parent Array constructor
        static get [Symbol.species]() { return Array; }
      }
      
      let a = new MyArray(1,2,3);
      let mapped = a.map(x => x * x);
      
      console.log(mapped instanceof MyArray); // false
      console.log(mapped instanceof Array);   // true

      //
      class Tiger {
        constructor(name) {
          this.name = name;
        }
        
        speak() {
          console.log(`${this.name} makes a meow.`);
        }
      }
      
      class Lion extends Tiger {
        speak() {
          super.speak();
          console.log(`${this.name} roars.`);
        }
      }
      
      let l = new Lion('Arturo');
      l.speak(); 
      // Arturo makes a noise.
      // Arturo roars.