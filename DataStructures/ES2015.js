class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "You are expelled!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;

    }
    addScores(score) {
        this.addScores.push(score);
        return this.scores;
    }
    calculateAverage() {
        this.scores.reduce(function(a,b) {return a+b;})
        return sum/this.scores.length;
    }

    // class method
    static EnrollStudents() {
        return "Enrolling students";
    }
}

// creating objects from classes
let firstStudent = new Student("Vance", "Leon", );
let secStudent = new Student("Renee", "Leon");

