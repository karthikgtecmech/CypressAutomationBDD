describe("Database Interaction", function () {

    it("Database Interaction", function () {

        cy.sqlServer("select * from automationlocators").then(function (result) {
            console.log(result[1][3])
        })

    })

})