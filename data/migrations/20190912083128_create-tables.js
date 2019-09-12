
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 500)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255)
            .unique()
            .notNullable();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .references('id') 
            .inTable('recipes')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE') 
        tbl.integer('ingredient_id') 
            .unsigned()
            .references('id') 
            .inTable('ingredients')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE') 
        tbl.float('quantity')
            .notNullable()
        tbl.integer('step_number') 
        tbl.text('step')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
