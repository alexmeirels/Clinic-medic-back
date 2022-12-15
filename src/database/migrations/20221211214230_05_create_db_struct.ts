import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('schedule', table => {
        table.increments('id').primary();
        table.string('date').notNullable();
        table.string('hour').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.integer('employer_id').notNullable().references('id').inTable('employer');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('schedule');
}

