import { Knex } from 'knex';
import { knexService } from '../../service/knex';
import { Aluno } from './aluno.d'
import { AlunoCreate } from './alunoCreate';

export class AlunoClass {
  private db:Knex

  constructor(knexService:knexService) {
    this.db = knexService.obterConexao();
  }

  getAll = async (): Promise <Aluno[] | []>  => {
    return this.db('aluno').select();
  }
  store = async (params:AlunoCreate) => {
    return this.db('aluno').insert(params)
  }

}
