import express, { Request, Response, response } from 'express';
import alunoFactory from './aluno.factory';
import { knexService } from '../../service/knex';
import { error } from 'console';


const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await alunoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoFactory.store(req.body);
  return res.status(201).json({ data: req.body });
  
});

router.get('/teste', async (_: Request, res: Response) => {
  return res.status(200).json({msg: 'funcionou'})
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const knexServiceNew = new knexService()
    const db = knexServiceNew.obterConexao();
    const updatedRowCount = await db('aluno').where({ id: req.params.id }).update(req.body);
    
    return updatedRowCount
      ? res.status(201).json({ msg: 'id atualizado' })
      : res.status(404).json({ erro: 'id não identificado' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: 'erro no servidor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const knexServiceNew = new knexService();
    const db = knexServiceNew.obterConexao();
    const { id } = req.params;

    const deletedRowCount = await db('aluno').where({ id }).delete();

    if (deletedRowCount === 0) {
      return res.status(404).json({ erro: 'id não identificado' });
    }

    return res.status(200).json({ msg: 'id deletado' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ erro: 'erro no servidor' });
  }
});




export default router;
