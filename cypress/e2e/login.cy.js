describe ('Login de usuário', () => {
    it('usuário deve fazer login com sucesso ', () => {
        // Arrange
        cy.visit('https://automationpratice.com.br/login')

        // Act
        cy.get('#user').type('Takizao@gmail.com')
        cy.get('#password').type('Takizao123')
        cy.get('#btnLogin').click()

         cy.screenshot('concluir Login')
        
        // Assert
        cy.get('#swal2-title').should('contain.text', 'Login realizado')   
        cy.get('.swal2-confirm').click()
        cy.url().should('eq', 'https://automationpratice.com.br/my-account')
    
    })
})