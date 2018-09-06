"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tablero_hangman_1 = require("./tablero-hangman");
var TecladoHangmanComponent = /** @class */ (function () {
    function TecladoHangmanComponent() {
    }
    TecladoHangmanComponent.prototype.ngOnInit = function () {
        document.getElementById("inputLetra").addEventListener('keyup', this.listLetrasError.bind(this), false);
    };
    TecladoHangmanComponent.prototype.listLetrasError = function () {
        this.letras = tablero_hangman_1.TableroHangmanComponent.letrasError;
    };
    TecladoHangmanComponent.prototype.isTrue = function () {
        if (this.letras)
            return this.letras.length;
    };
    TecladoHangmanComponent = __decorate([
        core_1.Component({
            selector: 'teclado-hangman',
            templateUrl: 'app/views/teclado-hangman.html',
            providers: [tablero_hangman_1.TableroHangmanComponent]
        }),
        __metadata("design:paramtypes", [])
    ], TecladoHangmanComponent);
    return TecladoHangmanComponent;
}());
exports.TecladoHangmanComponent = TecladoHangmanComponent;
//# sourceMappingURL=teclado-hangman.js.map