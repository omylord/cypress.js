describe('Тестирование Otdel.com', function () {
   
   it('Тестирование поиска', function () {
        cy.visit('https://otdelstore.com/');
        cy.get('.t-menuwidgeticons__search > .t-menuwidgeticons__link > .t-menuwidgeticons__img').click();
        cy.get('.t985__input').type('Худи{enter}');   
      })

   it('test Корзина', function () {
         cy.visit('https://otdelstore.com/');
         cy.get('.t-menuwidgeticons__cart > .t-menuwidgeticons__link > .t-menuwidgeticons__img').click();
         cy.contains('Оформить заказ');
         cy.get('.t706__close-icon').click();
         cy.get('.tn-elem__4634181331656417033006 > .tn-atom > a').click();
         cy.contains('Футболка').click();
         cy.contains('В корзину').click();
         cy.get('.t-menuwidgeticons__cart > .t-menuwidgeticons__link > .t-menuwidgeticons__img').click();
         cy.contains('Футболка');
         cy.get('.t706__close-icon').click();
      })
   it('test Избранное', function () {
         cy.visit('https://otdelstore.com/');
         cy.get('.t-menuwidgeticons__wishlist > .t-menuwidgeticons__link > .t-menuwidgeticons__img').click(); 
         cy.contains('Избранное:');
         cy.get('.tn-elem__4634181331656417002728 > .tn-atom > a').click();
         cy.get('[href="https://otdelstore.com/acsessories/tproduct/464758893-674354982321-kangol-panama-faux-fur-bucket-chyornaya"] > .t-store__card__imgwrapper > .t1002__addBtn').click();
         cy.get('.t-menuwidgeticons__wishlist > .t-menuwidgeticons__link > .t-menuwidgeticons__img').click();
         cy.get('.t1002__product-del > img').click();

   })
})