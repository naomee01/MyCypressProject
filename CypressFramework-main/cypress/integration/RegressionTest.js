/// <reference types= "cypress" />

describe("Quales management test suites",  () => {
  
    
  });

  it("verify user can log in successfully to Quales management app",  () => {
    cy.visit("http://tawdry-rule.surge.sh")
 // spied on sign in button
    cy.get('.css-48p1y4 > .MuiButton-root')
    //click sign in
  .click();
// spy on email field
  cy.get('[data-testid=EmailAddress]')
// type in the email
.type("ay@mail.com")
// spy on the password field
cy.get('[data-testid=Password]')
//type in password
.type("pass1234")
//spy the login button
cy.get('.MuiButton-contained')
// click log in
.click();
// write an assertion that the name Ayobmi is visible
//spy on Ayobami
cy.contains('Ayobami')
.should("be.visible")
// spy on add course button
cy.get('.MuiGrid-root > .MuiButton-root')
//click the add course button
.click();

cy.viewport(1536, 960);

cy.get('[data-testid="Title*"]')
.type("API TESTING")




  });

