describe('My First API test suite', function () {
    it('My First API test case', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [{
                    "book_name": "Learn Appium Automation with Java2902",
                    "isbn": "RS191",
                    "aisle": "227"
                }]
            }).as('bookretrievals')
        cy.get('.btn-primary').click()
        cy.wait('@bookretrievals').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})
