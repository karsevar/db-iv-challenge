
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Masons brownies'},
        {recipe_name: 'apple wood roasted port shoulder'},
        {recipe_name: 'Steak with Clams'},
        {recipe_name: 'Apple Cobbler'}
      ]);
};
