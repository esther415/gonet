describe("Harry Potter Test ", () => {

describe("Favorite Character ", () => {
  it("Cards print information", () => {
    cy.visit("http://localhost:3000 ");
    cy.get("[data-cy=cards]");
  });
    it("Cards call to api ", () => {
    cy.visit("http://localhost:3000 ");
    cy.request('GET', 'http://localhost:5008/character').should((response)=>{
      expect(response.body).to.have.length(25)
    });
  });
  it("Cards save favorite character", () => {
    cy.get("[data-cy=favorite-Checked]").first().check({ force: true });
    cy.get("[data-cy=favorite-list]").click();
    cy.get("[data-cy=favorite-name]").contains("Harry Potter");
    
  });
  it("favorite list remove character", () => {
    cy.get("[data-cy=favorite-list]").click();
    cy.get("[data-cy=favorite-name]").contains("Harry Potter");
    cy.get("[data-cy=favorite-delete]").click({ force: true });
  });
  });


describe("Filter ", () => {

  it("Student filter", () => {
    cy.get("[data-cy=student-filter]").click();
    cy.request('GET', 'http://localhost:5008/students').should((response)=>{
      expect(response.body).to.have.length(11)
    });
      cy.get("[data-cy=character-name]").contains("Harry Potter");
  });
  it("Staff filter", () => {
    cy.get("[data-cy=staff-filter]").click();
     cy.request('GET', 'http://localhost:5008/staff').should((response)=>{
      expect(response.body).to.have.length(8);
  
    });
       cy.request('GET', 'http://localhost:5008/character').should((response)=>{
cy.log( response.body)
      for( let data of response.body){
       expect(data.hogwartsStaff).to.deep.equal(true);
      }
 
    });
      cy.get("[data-cy=character-name]").contains("Minerva McGonagall");
  });
});
describe("Modal ", () => {

  it("Modal is visible", () => {
    cy.get("[data-cy=modal-createCharacter").click();
      cy.get("[data-cy=modal-isVisible]").contains("Agrega un personaje");
  });
  it("Create character", () => {
    cy.get("[data-cy=modal-createCharacter").click();
      cy.get("[  data-cy=modal-name]").type("Albus  Dumbledore ", {force: true});
      cy.get("[  data-cy=modal-dateOfBirth]").type("1900-12-31", {force: true});
      cy.get("[  data-cy=modal-eyeColour]").type("black ", {force: true});
      cy.get("[  data-cy=modal-hairColour]").type("white ", {force: true});
      cy.get("[  data-cy=modal-gender]").check( {force: true});
      cy.get("[  data-cy=modal-position]").check({force: true});
      cy.get("[ data-cy=submit]").click({force: true});
                
  });
});
});