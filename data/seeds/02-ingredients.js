
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {ingredient_name: 'Gala Apple'},
    {ingredient_name: 'tablespoon pepper'},
    {ingredient_name: 'teaspoon salt'},
    {ingredient_name: 'eggs'},
    {ingredient_name: 'tablespoons butter'},
    {ingredient_name: 'pounds ribeye'},
    {ingredient_name: 'cups cocoa'},
    {ingredient_name: 'onion'},
    {ingredient_name: 'pounds clams'},
    {ingredient_name: 'cups sugar'},
    {ingredient_name: 'cups vegable oil'},
    {ingredient_name: 'pounds Pork Shoulder'},
    {ingredient_name: 'cups milk'}
  ]);
};
