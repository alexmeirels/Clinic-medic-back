import {Knex} from 'knex'

export async function seed(knex: Knex){
  await knex('users').insert([
    {name: 'Alex Meireles', email: 'alex@gmail.com', phone: '31999999999', password: '312321'},
  ]);
  await knex('employer').insert([
    {contractDate: new Date(), salary: 2222, user_id: 1},
  ]);
}