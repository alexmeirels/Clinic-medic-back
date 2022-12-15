import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('address', table => {
        table.increments('id').primary();
        table.string('cep').notNullable();
        table.string('streat').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
      });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('address');
}

