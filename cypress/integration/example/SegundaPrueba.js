///<reference types="Cypress"/>
/*en la linea uno referenciamos a cypress para que nos muestre con el comando cy. mas metodos */

describe('Ingresar a pagina de compras', function () {

    beforeEach(() =>{
        cy.visit('www.automationpractice.com/index.php')
    })
    /*
    //caso 1: validar la cantidad de elementos que tiene producto pospulares
    it('Login pagina automationpractice',function(){

        //verifica la cantidad de objetos disponibles en producto populares de la forma tradicional
        //cy.get('#homefeatured > ').should('have.length',7)

        //verifica la cantidad de objetos disponibles en producto populares de la forma dinamica por medio de alias
        //obtenemos '#homefeatured >' como un parametro mas dinamico
        cy.get('#homefeatured > ').as('ProductoPopulares')

        cy.get('@ProductoPopulares').should('have.length',7)


    })

    //caso 2: agregar el elemento de tipo blouse al carrito de compra
    it('Agregar al carrito de compra el elemento de tipo blouse',function(){

        //mapeados el objeto y lo llamados de forma dinamica
        cy.get('#homefeatured > ').as('productoPopulares')
        //Iteramos para encontrar un producto con nombre blouse
        cy.get('@productoPopulares')
        .find('.product-name')
        .each(($el,index,$list) => {

            cy.get('@productoPopulares').find('.price') .then(function($el1){
                let precio=$el1.text();
                cy.log(precio)
            

            if($el.attr('title')==='Blouse' && precio.includes('26.00'))
            {
                cy.log('se ha encontrado el elemento buscado')
                cy.get('@productoPopulares').eq(index).contains('Add to cart').click()

            }
        }) 
        })

    })

    
    //caso de prueba 3
    it('Verificamos que el drop down de women, tenga los elementos necesarios',function(){
        cy.visit('www.automationpractice.com/index.php')
        //la siguiente linea habilita la linea y cambia el display: none a display: block
        cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr','style','display: block')
        cy.get('a[title="Tops"]').should('be.visible')
        cy.get('a[title="T-shirts"]').should('be.visible')
        cy.get('a[title="Blouses"]').should('be.visible')
        //el simbolo ^ busca si existe un title cuando la palabra comienza con casual o evening o summer pues todos la segunda es igual Dresses
        cy.get('a[title^="Casual"]').should('be.visible')
        cy.get('a[title^="Evening"]').should('be.visible')
        cy.get('a[title^="Summer"]').should('be.visible')
    })
    */

    //caso de prueba 4
    /*
    it('Verificamos que nuestros checkboxs se puedan seleccionar',function(){
        cy.visit('www.automationpractice.com/index.php')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')

    })
    */
    // caso 5
    /*
    it('Verificar que los dropdowns funcionen y tenga algo en la lista',function(){
        cy.visit('www.automationpractice.com/index.php')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')
    })
    */

    //caso 6
    it('Crear una compra desde cero', function () {
        cy.visit('www.automationpractice.com/index.php')
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.get('.button-medium[title="Proceed to checkout"]').click()

        cy.get('tr[id^=product]').find('.product-name > a').should('contains.text', 'Blouse')
        cy.get('tr[id^=product]').find('.price').should('contains.text', '27.00')
        cy.get('.cart_navigation > .button').click()
        cy.get('#email').type('hervincamargo@gmail.com')
        cy.get('#passwd').type('Sofia*2011')
        cy.get('#SubmitLogin > span').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('#cgv').check().should('be.checked')
        cy.get('.cart_navigation > .button').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button').click()
        cy.get('.cheque-indent > .dark').should('contain.text','Your order on My Store is complete.')


    })


})