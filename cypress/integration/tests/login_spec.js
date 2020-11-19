describe('Negative Login Test', () => {
    it('login scenario', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('cypresstesting2020@gmail.com')
        cy.get('#passwd').type('dfklafjsa')
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','My Account')
    });
});
