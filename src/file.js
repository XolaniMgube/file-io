"use strict"

let fs = require("fs")

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistedBy) {
        this.fullName = fullName.replace(" ", "_")
        this.age = age
        this.dateOfVisit = dateOfVisit
        this.timeOfVisit = timeOfVisit
        this.comments = comments
        this.assistedBy = assistedBy
        
    }

    save() {
        fs.writeFile("visitor_" + this.fullName + ".json", JSON.stringify(this,null,4),
            function(error) {
                if (error) {
                    throw error
                }
            })
    }

    load() {
        fs.readFile("visitor_" + this.fullName + ".json", "UTF8",  function(error, data) {
            if (error) {
                throw error;
            } else {
                console.log(data)
            }
        })
    }
}

let xolani = new Visitor("xolani mgube", 22, "10 Feb 2020", "09:00", "I have no comment", "Sbu")
let karabo = new Visitor("karabo mantse", 20, "13 Feb 2020", "09:00", "the place had too many people", "Sbu")
xolani.save();
karabo.save()
karabo.load();

module.exports = Visitor;

