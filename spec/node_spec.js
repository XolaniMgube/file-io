let Visitor = require("../src/file")

let xolani = new Visitor("xolani mgube", 22, "10 Feb 2020", "09:00", "I have no comment", "Sbu")
let karabo = new Visitor("karabo mantse", 20, "13 Feb 2020", "09:00", "the place had to many people", "Sbu")

describe("Testing the save() function", function(){

    xolani.save()
        it("checks if the save() function is defined", function(){
            expect(xolani.save).toBeDefined();
        })
        it("checks if save() has comments", function(){
            expect(xolani.comments).toBe("I have no comment")
            
        })
        it("checks the value of age for xolani", function() {
            expect(xolani.age).toBe(22)
        })
    })
    

describe("Testing if the load() function does fetch files from JSON", function() {
    karabo.load()
        it("checks if load() is defined", function() {
            expect(karabo.load).toBeDefined();
        })
        it("checks if load returns the saved information", function() {
           expect(karabo.fullName).toBe("karabo_mantse")
        })
})