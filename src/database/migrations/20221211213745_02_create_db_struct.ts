import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('employer', table => {
        table.increments('id').primary();
        table.dateTime('contractDate').notNullable();
        table.double('salary').notNullable();
        table.string('crm');
        table.string('specialty');
        table.integer('user_id').notNullable().references('id').inTable('user');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

