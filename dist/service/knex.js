"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexService = void 0;
var knex_1 = __importDefault(require("knex"));
var knex_2 = __importDefault(require("../config/knex"));
var knexService = /** @class */ (function () {
    function knexService() {
        this.obterConexao = function () {
            if (!knexService.conn) {
                knexService.conn = (0, knex_1.default)(knex_2.default);
            }
            return knexService.conn = (0, knex_1.default)(knex_2.default);
        };
    }
    return knexService;
}());
exports.knexService = knexService;
