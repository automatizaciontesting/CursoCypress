class PaymentPage
{
    getPayByBankWireOptionButton()
    {
        return cy.get('.bankwire')
    }
    getConfirmMyOrderButton()
    {
        return cy.get('.cart_navigation > .button')
    }
    getDescriptionTitleText()
    {
        return cy.get('.cheque-indent > .dark')
    }
}
export default PaymentPage;
