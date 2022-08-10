describe('My Second API test suite', function () {
    it('My Second API test case', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                req.continue((res) => {
                    expect(res.statusCode).to.equal(404)
                })
            
        }).as('dummyUrl')
        cy.get('.btn-primary').click()
        cy.wait('@dummyUrl')
    })
})
