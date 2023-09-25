import request from 'supertest';  

describe('Int - Aluno Suite', () => {
    it('##GET /aluno', async () => {
        const response = await request('http://localhost:8080')
        .get('/aluno')

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)

    })
    it('##GET /aluno/teste', async () => {
        const response = await request('http://localhost:8080')
        .get('/aluno/teste')

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toMatchObject( {"msg": "funcionou"})

    })
    it('##POST /aluno', async () => {
        const response = await request('http://localhost:8080')
        .post('/aluno')
        .send({
            "nome":"Raphael",
            "cpf":43463634
        })

        expect(response.status).toBe(201)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body.data).toMatchObject({
            "nome":"Raphael",
            "cpf":43463634
        })
        

    })
    it('##PUT /aluno/:id', async () => {
        const response = await request('http://localhost:8080')
        .put('/aluno/52')
        .send({
            "nome":"Raphael",
            "cpf":43463634
        })

        expect(response.status).toBe(201)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toMatchObject({
            msg: 'id atualizado'
        })
    })
    it('##DELETE /aluno/:id', async () => {
        await request('http://localhost:8080')
          .post('/aluno')
          .send({
            "id": 20002,
            "nome": "Raphael",
            "cpf": 43463634
          });
          
        const response = await request('http://localhost:8080')
          .delete('/aluno/20002');
      
        console.log('Response:', response.status, response.body);
      
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toMatchObject({
          msg: 'id deletado'
        });
      });
      

})