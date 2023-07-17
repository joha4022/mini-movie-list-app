/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    // .createTable('stars', table => {
    //     table.increments('id').primary();
    //     table.string('name', 500);
    // })

    .createTable('movies', table => {
      table.increments('id').primary();
      table.string('title', 500);
      table.string('released');
      table.string('rating');
      table.string('description', 500);
      table.string('img', 500);
      table.string('director');
      // table.json('stars_id').unsigned();
      // table.foreign('stars_id').references('stars.id');
    })

    .createTable('addedmovies', table => {
      table.increments('id').primary();
      table.string('title', 500);
      table.string('released');
      table.string('rating');
      table.string('description', 500);
      table.string('img', 500);
      table.string('director');
      // table.json('stars_id').unsigned();
      // table.foreign('stars_id').references('stars.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('addedmovies')
    .dropTableIfExists('movies')
};

