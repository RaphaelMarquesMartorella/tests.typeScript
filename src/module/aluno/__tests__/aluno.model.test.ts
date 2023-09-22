import { AlunoClass } from "../aluno.model"

describe('Unit - Aluno model Suite' , () => {
    it('Deve retornar valores do modelo', async () => {

        let knexServiceMock:any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([])
            }
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new AlunoClass(knexServiceMock);
        const response = await aluno.getAll()
        expect(response).toBeTruthy();
        expect(response.length).toBe(0);
    })
    
    it('Deve salvar um aluno no modelo', async () => {

        let knexServiceMock:any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            }
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new AlunoClass(knexServiceMock);
        const response = await aluno.store({
            nome:'Isabelle',
            cpf: 2323522
        })
        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    })
    
})
