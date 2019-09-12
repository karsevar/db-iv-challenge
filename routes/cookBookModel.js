const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes')
}

function getRecipeById(recipe_id) {
    return db('recipes').where({id: recipe_id})
}

function getShoppingList(recipe_id) {
    return db('instructions')
            .join('ingredients', 'instructions.ingredient_id', '=', 'ingredients.id')
            .join('recipes', 'instructions.recipe_id', '=', 'recipes.id')
            .where({recipe_id})
            .select('ingredients.ingredient_name', 'instructions.quantity', 'recipes.recipe_name')
}

function getInstructions(recipe_id) {
    return db('instructions') 
            .join('ingredients', 'instructions.ingredient_id', '=', 'ingredients.id')
            .where({recipe_id})
            .select('instructions.step_number', 'ingredients.ingredient_name', 'instructions.quantity', 'instructions.step')   
            .orderBy('instructions.step_number', 'asc')         
}

module.exports = {getRecipes, getShoppingList, getInstructions, getRecipeById}

