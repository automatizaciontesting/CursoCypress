Feature: Primer_conjunto_de_casos_de_prueba

    Este Feature esta siendo adaptado desde un formato de pom hacia cucumber

    Scenario: Crear una compra desde cero
    Given como usuario quiero comprar una blusa
    When la agrego al carrito
    Then el valor del articulo es de 27.00 dolares
    And el mensaje de orden completada deberia ser visible

