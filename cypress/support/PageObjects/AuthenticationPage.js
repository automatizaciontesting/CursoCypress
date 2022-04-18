class AuthenticationPage
{   
    getEmailAddressInput()
    {
        return cy.get('#email')
    }
    getPasswordInput()
    {
        return cy.get('#passwd')
    }
    
    getSingInButton()
    {
        return cy.get('#SubmitLogin')
    }

}
export default AuthenticationPage;
