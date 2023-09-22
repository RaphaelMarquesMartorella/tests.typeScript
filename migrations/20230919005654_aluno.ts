import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('aluno', (table) => {
        table.bigIncrements('id').primary();
        table.string('nome');
        table.integer('CPF');
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('aluno');
}

