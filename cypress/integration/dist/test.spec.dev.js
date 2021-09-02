"use strict";

// Cypress Testing
// Test all basic operations
// single digit: +/-/*/÷
// double digit: +/-
// Test more complex operations
// chaining together operations
// e.g. 2 + 2 * 5 - 1 + 27 / 3
describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('Basic operations', function () {
  it('should calculate 1 + 1 and return 2', function () {
    //Arrange 
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=add]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '2');
  });
  it('should calculate 250-50 and returns 200', function () {
    //Arrange 
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=subtract]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '200');
  });
  it('should calculate 50 ÷ 5 and return 10', function () {
    // Arrange 
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '10');
  });
  it('should calculate 8 * 5 and return 40', function () {
    // Arrange 
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '40');
  });
});
describe('Special operators and other functionality', function () {
  it('should calculate 18.5-10.2 and return 8.3', function () {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=decimalPoint]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=subtract]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=decimalPoint]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '8.3');
  });
  it('should erase the screen when the AC button is pressed', function () {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=decimalPoint]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=subtract]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=decimalPoint]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=ac]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '');
    cy.get('[data-cy=screenInput]').should("have.value", '');
  });
  it('should delete a single character when the delete button is pressed, changing calculation from 18-10 to 18-1 and therefore should return 17', function () {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=subtract]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=delete]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '17');
  });
  it('should calculate 18-7+1/2 and return 6 by correctly chaining operators', function () {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=subtract]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=add]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click(); // Assert 

    cy.get('[data-cy=screenOutput]').should("have.value", '6');
  });
});