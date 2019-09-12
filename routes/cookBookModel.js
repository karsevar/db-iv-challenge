const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes')
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
            .select('ingredients.ingredient_name', 'instructions.quantity', 'instructions.step', 'instructions.step_number')            
}

module.exports = {getRecipes, getShoppingList, getInstructions}

