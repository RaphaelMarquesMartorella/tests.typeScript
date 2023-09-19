import { AlunoClass } from './aluno.model'
import { knexService } from '../../service/knex'

export default new AlunoClass(new knexService)