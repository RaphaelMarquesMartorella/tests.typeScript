"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
describe('Int - Aluno Suite', () => {
    it('##GET /aluno', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)('http://localhost:8080')
            .get('/aluno');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    }));
    it('##GET /aluno/teste', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)('http://localhost:8080')
            .get('/aluno/teste');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toMatchObject({ "msg": "funcionou" });
    }));
    it('##POST /aluno', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)('http://localhost:8080')
            .post('/aluno')
            .send({
            "nome": "Raphael",
            "cpf": 43463634
        });
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toMatchObject({
            "nome": "Raphael",
            "cpf": 43463634
        });
    }));
    it('##PUT /aluno/:id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)('http://localhost:8080')
            .put('/aluno/52')
            .send({
            "nome": "Raphael",
            "cpf": 43463634
        });
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toMatchObject({
            msg: 'id atualizado'
        });
    }));
    it('##DELETE /aluno/:id', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)('http://localhost:8080')
            .post('/aluno')
            .send({
            "id": 102,
            "nome": "Raphael",
            "cpf": 43463634
        });
        const response = yield (0, supertest_1.default)('http://localhost:8080')
            .delete('/aluno/102');
        console.log('Response:', response.status, response.body);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toMatchObject({
            msg: 'id deletado'
        });
    }));
});
