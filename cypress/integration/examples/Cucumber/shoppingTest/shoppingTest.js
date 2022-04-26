import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"


//Importamos Clases de Page Objects
import AddressPage from '../../../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../../../support/PageObjects/AuthenticationPage'
import HomePage from '../../../../support/PageObjects/HomePage'
import PaymentPage from '../../../../support/PageObjects/PaymentPage'
import ShippingPage from '../../../../support/PageObjects/ShippingPage'
import ShoppingSummaryCartPage from '../../../../support/PageObjects/ShoppingCartSummaryPage'

//Suite de casos que contiene cada caso 
const addressPage = new AddressPage()
const authenticationPage = new AuthenticationPage()
const homePage = new HomePage()
const paymentPage = new PaymentPage()
const shippingPage = new ShippingPage()
const shoppingSummaryCartPage = new ShoppingSummaryCartPage()

Given('como usuario quiero comprar una blusa', () => {  
    cy.visit("http://automationpractice.com/index.php")
})

When('la agrego al carrito', ()=>{
    homePage.getSearchBoxInput().type('Blouse')
    cy.screenshot('ingresar producto')
    homePage.getSearchBoxButton().click()  
    homePage.getAddToCardElementButton("Blouse").click()
    homePage.getProceedToCheckoutButton().click()
})

Then('el valor del articulo es de 27.00 dolares', () => {
    shoppingSummaryCartPage.getProductNameText().should('contain.text', 'Blouse')  
    shoppingSummaryCartPage.getProductPriceText().should('contain.text', '27.00')
    shoppingSummaryCartPage.getProceedToCheckoutButton().click()

    authenticationPage.getEmailAddressInput().type('hervincamargo@gmail.com')
    authenticationPage.getPasswordInput().type('Sofia*2011')
    authenticationPage.getSingInButton().click()

    addressPage.getProceedToCheckoutButton().click()

    shippingPage.getTermsOfServiceCheckbox().check().should('be.checked')
    shippingPage.getProceedToCheckoutButton().click()

    paymentPage.getPayByBankWireOptionButton().click()
    paymentPage.getConfirmMyOrderButton().click()
})

And('el mensaje de orden completada deberia ser visible', () => {
    paymentPage.getDescriptionTitleText().should('contain.text', 'Your order on My Store is complete.')
})