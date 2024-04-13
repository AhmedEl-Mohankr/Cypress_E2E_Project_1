describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#task-control button").click();
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");

    cy.contains("Add Task").click();
    cy.contains("cancel").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });

  it("should create a new task", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    //In this modal we don\t want to close it.
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some Description");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("New Task");
    cy.get(".task p").contains("Some Description");
  });

  it("should validate user input", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").contains("Add Task").click();
    cy.contains("Please provide values");
  });

  it("should filter tasks", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some Description");
    cy.get("#category".select("urgent"));
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0); //our expectation here is that the list of tasks is empty and there are no elements in there.
    //filtering for moderate clears the task.
    cy.get("#filter").select("urgent");
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });

  it("should add multiple tasks", () => {});
  cy.visit("http://localhost:5173/");
  cy.contains("Add Task").click();
  cy.get("#title").type("Task 1");
  cy.get("#summary").type("First task");
  cy.get(".modal").contains("Add Task").click();
  cy.get(".task").should("have.length", 1);
  cy.contains("Add Task").click();
  cy.get("#title").type("Task 2");
  cy.get("#summary").type("Second task");
  cy.get(".modal").contains("Add Task").click();
  cy.get(".task").should("have.length", 2);
  cy.get(".task").eq(0).contains("First task");
  cy.get(".task").eq(1).contains("Second task");

  //first() to get the first element. last() to get the last element. eq() method to get specific selected by index such eq(1)
});

/*
- TEST 1: we want to test whether this application allows us to click this "Add task button" 
then if it opens this modal which can then be closed by clicking on the backdrop.

-contains can also look for elements that contains text

- .click() it will simulate a click on a button.
{force: true} => when dealing with coordinates for click, if you didn't add value, cypress will always
click on the middle of the screen which can fail a test of backdrop. that's why we use force: true
to force cypress to make the click.

However the test will still succeed even if the backdrop is closed.
Therefor, we need to add additional check to make sure that the module has actually closed.

Note> Make sure to repeat the same steps including opening the modal so the test can succeed.
*/

/*
test 2 => stimulate user clicks and all of his steps:
1- open modal.
2- type information into  title
3- Type summary 
4- pick category or use the default one.
3- click on Add task
*/
