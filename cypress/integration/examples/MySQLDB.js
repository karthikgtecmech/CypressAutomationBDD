describe("Database Interaction", function () {

    it("Database Interaction", function () {

        cy.task('queryDb', 'select * from automationlocators').then(function (result) {
            console.log(result)
           
            console.log(result[2].LocatorValue)
        })

    })

})