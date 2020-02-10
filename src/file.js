"use strict"

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistedBy) {
        this.fullName = fullName
        this.age = age
        this.dateOfVisit = dateOfVisit
        this.timeOfVisit = timeOfVisit
        this.comments = comments
        this.assistedBy = assistedBy
    }

    save() {
        console.log(
            `Name: ${this.fullName}
Age: ${this.age}
Visit Date: ${this.dateOfVisit}
Visit Time: ${this.timeOfVisit}
${this.fullName}'s comment: ${this.comments}
Assisted By: ${this.assistedBy}`)
    }

    
    
}

let xolani = new Visitor("Xolani Mgube", 22, "10 Feb 2020", "09:00", "I have no comment", "Stuber")
xolani.save()