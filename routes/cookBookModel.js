const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('instructions')
        .where({recipe_id})
}

module.exports = {getRecipes, getShoppingList}

