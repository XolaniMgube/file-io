"use strict"

let fs = require("fs")

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
        let nameWithUnderscore = this.fullName.replace(" ", "_")
        fs.writeFile("visitor_" + nameWithUnderscore + ".json", JSON.stringify(this,null,4),
            function(error) {
                if (error) {
                    throw error
                }
            })
    }
    
    load() {
        let nameWithUnderscore = this.fullName.replace(" ", "_")
        fs.readFile("visitor_" + nameWithUnderscore + ".json", UTF8, 
        function(error, data) {
            if (error) {
                throw error;
            } else {
                console.log(data)
            }
        })
    }
}

let xolani = new Visitor("Xolani Mgube", 22, "10 Feb 2020", "09:00", "I have no comment", "Stuber")
xolani.save()
// xolani.load()
