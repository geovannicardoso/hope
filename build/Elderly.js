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
exports.Elderly = void 0;
var pessoa_1 = require("./pessoa");
var Elderly = /** @class */ (function (_super) {
    __extends(Elderly, _super);
    function Elderly(idade, local, nome, nivelDeEscolaridade, filhoI, cpfI) {
        var _this = _super.call(this, idade, local, nome, nivelDeEscolaridade) || this;
        _this.filhoI = filhoI;
        _this.cpfI = cpfI;
        return _this;
    }
    Elderly.prototype.cpf = function () {
        console.log("CPF: ".concat(this.cpfI));
    };
    Elderly.prototype.filhos = function () {
        console.log("O ".concat(this.nome, " tem ").concat(this.filhos, " filhos."));
    };
    return Elderly;
}(pessoa_1.Pessoa));
exports.Elderly = Elderly;
