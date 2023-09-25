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
const express_1 = __importDefault(require("express"));
const aluno_factory_1 = __importDefault(require("./aluno.factory"));
const knex_1 = require("../../service/knex");
const router = express_1.default.Router();
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield aluno_factory_1.default.getAll();
    return res.status(200).json({ data });
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield aluno_factory_1.default.store(req.body);
    return res.status(201).json({ data: req.body });
}));
router.get('/teste', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ msg: 'funcionou' });
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const knexServiceNew = new knex_1.knexService();
        const db = knexServiceNew.obterConexao();
        const updatedRowCount = yield db('aluno').where({ id: req.params.id }).update(req.body);
        return updatedRowCount
            ? res.status(201).json({ msg: 'id atualizado' })
            : res.status(404).json({ erro: 'id não identificado' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ erro: 'erro no servidor' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const knexServiceNew = new knex_1.knexService();
        const db = knexServiceNew.obterConexao();
        const { id } = req.params;
        const deletedRowCount = yield db('aluno').where({ id }).delete();
        if (deletedRowCount === 0) {
            return res.status(404).json({ erro: 'id não identificado' });
        }
        return res.status(200).json({ msg: 'id deletado' });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ erro: 'erro no servidor' });
    }
}));
exports.default = router;
