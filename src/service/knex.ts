import knex, {Knex} from 'knex';
import knexConfig from '../config/knex';

export class knexService {

  private static conn:Knex;

  obterConexao = () => {
    if (!knexService.conn) {
      knexService.conn = knex(knexConfig)
    }
    return knexService.conn = knex(knexConfig)
  }

}




