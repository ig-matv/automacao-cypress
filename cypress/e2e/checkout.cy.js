describe ('Checkout', () => {
    it('usuário deve fazer checkout com sucesso ', () => {
        // Arrange
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#user').type('Takizao@gmail.com')
        cy.get('#password').type('Takizao123')
        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('contain.text', 'Login realizado')   
        cy.get('.swal2-confirm').click()
        cy.url().should('eq', 'https://automationpratice.com.br/my-account')
        

        // Act
        cy.get(':nth-child(1) > .search_width > img').click()
        cy.get('form > input').type('Blusa')
        cy.get('.btn').click()
        cy.get('#swal2-title').should('contain.text', 'Success')
        cy.get('.swal2-confirm').click()
        cy.url().should('eq', 'https://automationpratice.com.br/shop')
        cy.get(':nth-child(3) > .product_wrappers_one > .thumb > .image > .hover-image').click()
        cy.url().should('eq', 'https://automationpratice.com.br/product-details-one/3')
        cy.get('.links_Product_areas > .theme-btn-one').click()
        cy.get('#swal2-title').should('contain.text', 'Success')
        cy.get(':nth-child(3) > .offcanvas-toggle').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
        cy.get('#fname').type('Takizao')
        cy.get('#lname').type('Takizao')
        cy.get('#cname').type('takizaobatatas')
        cy.get('#email').type('takizao@gmail.com')
        cy.get('#country').select('usa')
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type('12345')
        cy.get('#faddress').type('Rua dos batata, 022222222')
        cy.get('#messages').type('Por favor, entregue o mais rápido possível')
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#javascript').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()

         cy.screenshot('concluir checkout')

        // Assert
        cy.get('.offer_modal_left > h3').should('contain.text', 'Congrats! Your order was created with sucess!')
        cy.get('.close > span').click()
    
    })
})