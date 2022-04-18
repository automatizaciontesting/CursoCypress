
//suite de casos de prueba
describe('Primer caso de prueba', function()
{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.clearCookies()
      })
    //caso de prueba 1
    it('Ingresar a la pagina principal de atenea', function()
    {
       //lanzar pagina web
       cy.visit("https://ateneaconocimientos.net/")

    }
    )
//caso de prueba 2

//caso de prueba 3

}
)