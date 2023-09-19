"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_model_1 = require("./aluno.model");
var knex_1 = require("../../service/knex");
exports.default = new aluno_model_1.AlunoClass(new knex_1.knexService);
