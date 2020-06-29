// Class plant
function plant(name, leafType, rootSystem, fruit, averageHeight, stemDiameter, origins) {
    this.name = name
    this.leafType = leafType
    this.rootSystem = rootSystem
    this.fruit = fruit
    this.averageHeight = averageHeight
    this.stemDiameter = stemDiameter
    this.origins = origins
    this.use = () => {
        console.log("It is used to provide food.")
    }
    this.planting = () => {
        console.log("It grows in 2 months")
    }
}

// Class plane
function plane(name, model, company, pilots, maxLoad, type, crew) {
    this.name = name
    this.model = model
    this.company = company
    this.pilots = pilots
    this.maxLoad = maxLoad
    this.type = type
    this.crew = crew
    this.time = () => {
        console.log("It flies non-stop for a maximum of 20hours")
    }
    this.use = () => {
        console.log("It carries only laguage")
    }
}

// Class movie
function movie(name, genre, company, ratings, actors, year, director) {
    this.name = name
    this.genre = genre
    this.company = company
    this.ratings = ratings
    this.actors = actors
    this.year = year
    this.director = director
    this.runTime = () => {
        console.log("It plays for 2 hours")
    }
    this.role = () => {
        console.log("It entertains those that watch it")
    }
}

// Class phone
function phone(name, type, brand, model, manufacturer, color, year) {
    this.name = name
    this.type = type
    this.brand = brand
    this.model = model
    this.manufacturer = manufacturer
    this.color = color
    this.year = year
    this.sound = () => {
        console.log("It rings")
    }
    this.update = () => {
        console.log("It auto updates itself")
    }
}

// Class university
function university(name, location, Chancellor, students, lecturers, size, yearEstablished) {
    this.name = name
    this.location = location
    this.Chancellor = Chancellor
    this.students = students
    this.lecturers = lecturers
    this.size = size
    this.yearEstablished = yearEstablished
    this.sound = () => {
        console.log("It rings")
    }
    this.update = () => {
        console.log("It auto updates itself")
    }
}

// Class university
function university(name, location, Chancellor, students, lecturers, size, yearEstablished) {
    this.name = name
    this.location = location
    this.Chancellor = Chancellor
    this.students = students
    this.lecturers = lecturers
    this.size = size
    this.yearEstablished = yearEstablished
    this.lessons = () => {
        console.log("It teaches online")
    }
    this.getStudents = () => {
        console.log("It admits new students")
    }
}

// Class patient
function patient(name, origin, virus, medicine, vaccine, disease, age) {
    this.name = name
    this.origin = origin
    this.virus = virus
    this.medicine = medicine
    this.vaccine = vaccine
    this.disease = disease
    this.age = age
    this.symptom = () => {
        console.log("Patient has a fever")
    }
    this.disability = () => {
        console.log("Patient can't talk")
    }
}