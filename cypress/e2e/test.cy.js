
describe('Unique Recipe Manager - Level 2', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Allows the user to add a new recipe and view it in the list', () => {
    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    const ingredient = 'Tomato'
    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="ingredient-input"]').type(ingredient)
    cy.get('[data-test="add-ingredient-button"]').click()
    cy.get('[data-test="submit-recipe-button"]').click()
    cy.get(`[data-test="recipe"][data-name="${recipeName}"]`).should('contain', recipeName)
    cy.get(`[data-test="recipe"][data-name="${recipeName}"] [data-test="ingredient"]`).should('contain', ingredient)

    const secondIngredient = 'Cucumber'
    cy.get('[data-test="recipe-name-input"]').clear().type(recipeName)
    cy.get('[data-test="ingredient-input"]').type(secondIngredient)
    cy.get('[data-test="add-ingredient-button"]').click()
    cy.get('[data-test="submit-recipe-button"]').click()
    cy.get(`[data-test="recipe"][data-name="${recipeName}"] [data-test="ingredient"]`).should('contain', secondIngredient)
  })

  it('Does not allow adding a recipe with no name or ingredients', () => {
    cy.get('[data-test="submit-recipe-button"]').click()
    cy.get('[data-test="recipe"]').should('not.exist')

    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="submit-recipe-button"]').click()
    cy.get('[data-test="recipe"]').should('not.exist')
  })

  it('Allows removal of a recipe from the list', () => {
    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    const ingredient = 'Onion'
    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="ingredient-input"]').type(ingredient)
    cy.get('[data-test="add-ingredient-button"]').click()
    cy.get('[data-test="submit-recipe-button"]').click()

    cy.get(`[data-test="recipe"][data-name="${recipeName}"]`).should('exist')
    cy.get(`[data-test="recipe"][data-name="${recipeName}"] [data-test="remove-recipe-button"]`).click()
    cy.get(`[data-test="recipe"][data-name="${recipeName}"]`).should('not.exist')
  })
})
