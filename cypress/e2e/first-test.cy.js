describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("li").should("have.length", 6);
    cy.get("span").should("have.length", 12);
  });
});

