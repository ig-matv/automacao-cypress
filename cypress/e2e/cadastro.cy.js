describe ('Cadastro de usuário', () => {
    it('deve cadastrar um usuário com sucesso', () => {
        // Arrange
        cy.visit('https://automationpratice.com.br/register')

        // Act
        cy.get('#user').type('Takizao')
        cy.get('#email').type('Takizao@gmail.com')
        cy.get('#password').type('Takizao123')
        cy.get('#btnRegister').click()
        
         cy.screenshot('concluir cadastro')

        // Assert
        cy.get('#swal2-title').should('contain.text', 'Cadastro realizado!')
        cy.get('.swal2-confirm').click()
        cy.url().should('eq', 'https://automationpratice.com.br/my-account')
    })
})