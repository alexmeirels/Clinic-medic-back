import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.integer('address_id').references('id').inTable('address');
        table.string('password').notNullable();
      });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

