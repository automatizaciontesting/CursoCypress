/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
require('cypress-xpath')
// Suit de casos de prueba avanzados
describe('Segundo de casos de prueba avanzados', function(){
    before(function(){
        //Cargamos lo valores del archivo example.json
        cy.fixture('example').then(function (datos) {
            this.datos = datos
            cy.fixture(this.datos.imagen).as('imagen')
        })
        

    })
    beforeEach(() =>{
        //Ingresar a la pagina de formulario 
        cy.visit('https://demoqa.com/automation-practice-form/')
    })

    it('Diligenciar formulario usando manejo de datos con tecnica datadriven .json',function(){
        cy.get('#firstName').type(this.datos.name)
        cy.get('#lastName').type(this.datos.lastName)
        cy.get('#userEmail').type(this.datos.email)
        cy.get('input[value='+this.datos.gender+']').click({force:true})
        cy.get('#userNumber').type(this.datos.phoneNumber)
        cy.xpath('//*[contains(text(),"Music")]//../input').click({force: true}).should('be.checked')
        //escribe en el campo de texto pero debe darle un enter para que no quede un espacio mostrando autocompletado
        cy.get('.subjects-auto-complete__value-container').type(this.datos.subjects+'{enter}')
        cy.get('#dateOfBirthInput').click()
        //en la posicion cero (0) se encuentra marzo
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.date[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.date[1])
        cy.get(':nth-child(5) > .react-datepicker__day--0'+this.datos.date[2]).click()
        cy.get('#dateOfBirthInput')
            .should('contain.value',this.datos.date[0].substring(0,3))
            .should('contain.value',this.datos.date[1])
            .should('contain.value',this.datos.date[2])
            //cy.get('div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('"+this.datos.hobbies[0]+"')) input').check()
            cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('"+this.datos.hobbies[0]+"')) input").check({force: true})
            cy.get('#uploadPicture').then(function($el){
                //convertir una imagen en base 64
                const blob = Cypress.Blob.base64StringToBlob(this.imagen,'image/png')
                
                const file = new File([blob],this.datos.imagen, {type: 'image/png'})
                const list = new DataTransfer()

                list.items.add(file)
                const myFileList = list.files

                $el[0].files = myFileList
                $el[0].dispatchEvent(new Event('change',{bubbles:true}))

                

            })
            
            cy.get('#currentAddress').type(this.datos.address)
            cy.xpath('//*[contains(text(),"Select State")]').click({force:true})
            cy.xpath('//div[@id="state"]//input').type('NCR'+'{enter}')
            cy.xpath('//*[contains(text(),"Select City")]').click({force:true})
            cy.xpath('//div[@id="city"]//input').type(this.datos.city+'{enter}')
            cy.get('#submit').click({force:true})
        


            //aserciones
            cy.get('#example-modal-sizes-title-lg')
            .should('have.text','Thanks for submitting the form')

            cy.get('td:contains(Student Name) +td')
            .should('have.text',this.datos.name +' '+ this.datos.lastName)

            cy.get('td:contains(Student Email) +td')
            .should('have.text',this.datos.email)

            cy.get('td:contains(Gender) +td')
            .should('have.text',this.datos.gender)

            cy.get('td:contains(Mobile) +td')
            .should('have.text',this.datos.phoneNumber)

            cy.get('td:contains(Date of Birth) +td')
            .should('have.text',this.datos.date[2]+' '+this.datos.date[0]+','+this.datos.date[1])


            cy.get('td:contains(Subjects) +td')
            .should('have.text',this.datos.subjects)

            cy.get('td:contains(Hobbies) +td')
            .should('have.text',this.datos.hobbies[1]+', '+this.datos.hobbies[0])

            cy.get('td:contains(Picture) +td')
            .should('have.text',this.datos.imagen)


            cy.get('td:contains(Address) +td')
            .should('have.text',this.datos.address)

            
            cy.get('td:contains(State and City) +td')
            .should('have.text',this.datos.state+' '+this.datos.city)


    })






})
