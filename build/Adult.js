"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adult = void 0;
var pessoa_1 = require("./pessoa");
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(idade, local, nome, nivelDeEscolaridade, filhoA, cpfA) {
        var _this = _super.call(this, idade, local, nome, nivelDeEscolaridade) || this;
        _this.cpfA = cpfA;
        _this.filhoA = filhoA;
        return _this;
    }
    Object.defineProperty(Adult.prototype, "escolaridade", {
        get: function () {
            if (this.nivelDeEscolaridade == 1) {
                return "Não se aplica";
            }
            else if (this.nivelDeEscolaridade == 2) {
                return "Fundamental";
            }
            else if (this.nivelDeEscolaridade == 3) {
                return "Médio";
            }
            else if (this.nivelDeEscolaridade == 4) {
                return "Superior";
            }
        },
        enumerable: false,
        configurable: true
    });
    Adult.prototype.cpf = function () {
        console.log("CPF: ".concat(this.cpfA));
    };
    Adult.prototype.filhos = function () {
        console.log("O ".concat(this.nome, " tem ").concat(this.filhoA, " filhos."));
    };
    return Adult;
}(pessoa_1.Pessoa));
exports.Adult = Adult;
