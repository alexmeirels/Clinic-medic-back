import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('patient', table => {
        table.increments('id').primary();
        table.double('weight').notNullable();
        table.integer('height').notNullable();
        table.string('bloodType').notNullable();
        table.integer('user_id').notNullable().references('id').inTable('user');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('patient');
}

