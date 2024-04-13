describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header img"); 
    //OR cy.get(".main-header").find("img"); find() will find all the elements with that selector inside all the elements that were found by get().
  });

  //checking the site have a title that says my cypress course tasks
  //contains() will help to search for certain text.
  //should() takes just one argument ("exist") or two arguments ("expectation", value).
  //have.length to make sure the number of elements.
  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks"); // will search in h1
    //cy.contains("Tasks"); will search everywhere in the page
  });


});
