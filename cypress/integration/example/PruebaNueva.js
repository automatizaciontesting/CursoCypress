/// <reference types="Cypress"/>    
 
//Importamos Clases de Page Objects
import HomePage from '../../support/PageObjects/HomePage'
import AddressPage from '../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../support/PageObjects/AuthenticationPage'
import PaymentPage from '../../support/PageObjects/PaymentPage'
import ShippingPage from '../../support/PageObjects/ShippingPage'
import ShoppingCartSummaryPage from '../../support/PageObjects/ShoppingCartSummaryPage'
 
 
 
//Suite de casos que contiene cada caso 
describe('Primer conjunto de casos de prueba', function () {
    const homePage = new HomePage()
    const addressPage = new AddressPage()
    const authenticationPage = new AuthenticationPage()
    const paymentPage = new PaymentPage()
    const shippingPage = new ShippingPage()
    const shoppingCartSummaryPage = new ShoppingCartSummaryPage()
 
 
    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("http://automationpractice.com/index.php")
    })

    //caso6
    it('Crear una compra desde cero', function () {
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.get('.button-medium[title="Proceed to checkout"]').click()

        cy.get('tr[id^=product]').find('.product-name > a').should('contain.text', 'Blouse')
        cy.get('tr[id^=product]').find('.price').should('contain.text', '27.00')
        cy.get('.cart_navigation > .button').click()
        cy.get('#email').type('cypress@ateneaconocimientos.net')
        cy.get('#passwd').type('Atenea')
        cy.get('#SubmitLogin').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('#cgv').check().should('be.checked')
        cy.get('.cart_navigation > .button').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('.cheque-indent > .dark').should('contain.text','Your order on My Store is complete.')
    })

    it('Crear una compra desde cero', function () {
        /*
        homePage.getSearchBoxInput().type('Blouse')
        homePage.getSearchBoxButton().click()  
        homePage.getAddToCardElementButton('Blouse').click()
        homePage.getProceedToCheckoutButton().click()
*/
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.get('.button-medium[title="Proceed to checkout"]').click()

        shoppingCartSummaryPage.getProductNameText().should('contain.text', 'Blouse')  
        shoppingCartSummaryPage.getProductPriceText().should('contain.text', '27.00')
        shoppingCartSummaryPage.getProceedToCheckoutButton().click()
        authenticationPage.getEmailAddressInput().type('hervincamargo@gmail.com')
        authenticationPage.getPasswordInput().type('Sofia*2011')
        authenticationPage.getSingInButton().click()
 
        addressPage.getProceedToCheckoutButton().click()
 
        shippingPage.getTermsOfServiceCheckbox().check().should('be.checked')
        shippingPage.getProceedToCheckoutButton().click()
 
        paymentPage.getPayByBankWireOptionButton().click()
        paymentPage.getConfirmMyOrderButton().click()
        paymentPage.getDescriptionTitleText().should('contain.text', 'Your order on My Store is complete.')
        Cypress.config('defaultCommandTimeout',4000)       
        
    })

})