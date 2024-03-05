# Unique Recipe Manager Frontend - Level 2

Your challenge is to create a frontend app that allows users to add, view, and delete recipes. Each recipe consists of a name and a list of ingredients. The task requires you to implement the functionality in a way that it passes predefined End-to-End (E2E) tests using Cypress.

### Tech Stack

You are required to use the following technologies for this challenge:

- **Vue.js** for the frontend framework
- **Vuex** for state management
- **Ant Design Vue** for UI components
- **TypeScript** for programming language
- **Vite** as the build tool
- **Jest** for unit testing
- **SASS** for styling
- **ES6** for JavaScript standards

### Frontend Requirements

The application should have a form to submit new recipes, a list to display all the added recipes, and a way to remove recipes from the list.

#### Form to submit new recipes

The form should include input fields for the recipe name and ingredients, and buttons to add ingredients and submit the recipe. Please, follow this structure:

```html
<form>
  <input data-test="recipe-name-input" type="text" placeholder="Recipe Name" />
  <input data-test="ingredient-input" type="text" placeholder="Ingredient" />
  <button data-test="add-ingredient-button" type="button">Add Ingredient</button>
  <button data-test="submit-recipe-button" type="submit">Submit Recipe</button>
</form>
```

- The recipe name and at least one ingredient are required to submit a recipe.
- Ingredients should be added individually by typing the ingredient name and clicking the "Add Ingredient" button.
- Upon successful submission, the input fields should be cleared.

#### List of recipes

Each recipe in the list should display its name and all its ingredients. They should be structured as follows:

```html
<div data-test="recipe" data-name="${recipe-name}">
  <span>${recipe-name}</span>
  <ul>
    <li data-test="ingredient">${ingredient-name}</li>
    ...
  </ul>
  <button data-test="remove-recipe-button">Remove</button>
</div>
```

- `${recipe-name}`: The name of the recipe.
- `${ingredient-name}`: The name of the ingredient.

#### Recipe removal

- Each recipe should have a "Remove" button.
- Clicking this button should remove the recipe from the list.

### Additional Requirements

- Ensure that your application passes the E2E tests as outlined above without access to the test files. Use the descriptions to guide your implementation.
- Implement client-side validation for the form data to ensure a recipe name and at least one ingredient are provided before submission.
- Handle errors gracefully, such as when the application fails to update the list of recipes.
- Write unit tests for one component of choice using Jest. Focus on testing the behavior that is most crucial to the application.
- Prioritize clean, maintainable code. Extract reusable components and utilities where it makes sense. We want to assess how you structure a Vue.js application for ease of maintenance and scalability.

### Bonus

- Styling is not the main focus of this challenge, but applying some basic styling to make the application user-friendly would be a plus. Use SASS and Ant Design Vue components to improve the look and feel of the app.

Good luck with your coding challenge! We're excited to see your Unique Recipe Manager application.