describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("li").should("have.length", 6);
    cy.get("span").should("have.length", 12);
  });
});

/*
  we want to make sure that this page is not just loaded successfully but we can actually see those six course goals.
  we want to make sure that certain elements are visible
For the second check, we will use the cy object and on this object we will call
 the get() function.

 This is another built in function that and ever built in command provided by cypress just 
 Like the visit command. We can use this command to search certain DOM elements on a page that was loaded
 by the help of a visit. So we first visit a page and then in a second step, we search for
 a certain element. 
 1-  In this check we will use get to find all these list 'li' elements.

 2- Then we will chain another command by adding another dot then use>
 - Should() function to formulate an expectation and within (we pass the string such as 'have.length', specify the length)

 should() function takes two arguments:
 1- 'string', length of the string.

 So this two commands will check that we get a <list> elements that has a length of six

 */
