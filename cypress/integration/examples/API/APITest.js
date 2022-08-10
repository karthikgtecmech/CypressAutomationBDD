describe('My Third API test suite', function () {
    it('My Third API test case', function () {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdfjvcj",
            "aisle":"227121",
            "author":"Karthik D"
            }
            ).then(function(response){
                expect(response.body).to.have.property('Msg', 'successfully added')
                expect(response.status).to.equal(200)
            })
    })
})
