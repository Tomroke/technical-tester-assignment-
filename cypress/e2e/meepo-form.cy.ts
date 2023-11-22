describe('Meepo form', () => {
  it('Meepo form should exist', () => {
    cy.visitForm();

    cy.get('.F9yp7e')
        .should('exist')
        .contains('Teknisk testare Minso');

    cy.get('[jscontroller="A2m8uc"]')
        .should('exist')
        .contains('Logga in på Google');

    cy.get('.lRwqcd')
        .should('exist')
        .contains('Nästa');
  });

  it('Fill out first form page correctly', async () => {
    cy.visitForm();

    cy.get('.lRwqcd > .uArJ5e > .l4V7wb')
        .should('exist')
        .contains('Nästa')
        .click()
        .then(() => {

          cy.get('.SajZGc')
              .should('exist')
              .contains('Lägg till anställd');

          cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod')
              .should('exist')
              .find('input')
              .type('Tommy');

          cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod')
              .should('exist')
              .find('input')
              .type('Irving')

          cy.get(':nth-child(4) > [jsmodel="CP1oW"] > .geS5n')
              .should('exist')
              .find('input')
              .type('1991-12-08');

          const dropdownMeny = cy.get(':nth-child(5) > [jsmodel="CP1oW"] > .geS5n')
              .should('contain', 'Ja')
              .should('contain', 'Nej')
              .find('.KKjvXb');
            dropdownMeny.click();

            const dropdownYes = cy.get(':nth-child(5) > [jsmodel="CP1oW"] > .geS5n')
                .should('contain', 'Nej')
                .filter('button');
            dropdownYes.click();

        });
  });

  it('Verify required form validation', async () => {
    cy.visitForm();

      cy.get('.lRwqcd')
        .should('exist')
        .contains('Nästa')
        .click().then(() => {
          cy.get('.SajZGc')
              .should('exist')
              .contains('Lägg till anställd');
      });

      cy.get('.lRwqcd')
          .should('exist')
          .find('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd')
          .contains('Nästa')
          .click();

      cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n')
        .should('exist')
      .contains('Det här är en obligatorisk fråga');

      cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod')
          .should('exist')
          .find('input')
          .type('Tommy');

      cy.get('.lRwqcd')
          .should('exist')
          .find('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd')
          .contains('Nästa')
          .click();
  });
});
