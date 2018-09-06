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
var app_component_1 = require("../app.component");
var tablero_hangman_1 = require("./tablero-hangman");
var MenuHangmanComponent = (function () {
    function MenuHangmanComponent() {
        this.app = new app_component_1.AppComponent();
        this.app = new app_component_1.AppComponent();
    }
    MenuHangmanComponent.prototype.ngOnInit = function () {
        console.log(this.app);
    };
    MenuHangmanComponent.prototype.tablero = function () {
        console.log(this.app.mostrar);
        this.app.mostrar = 0;
        console.log("mostrar tablero");
    };
    MenuHangmanComponent.prototype.jugadores = function () {
        console.log("mostrar jugadores");
        this.app.mostrar = 1;
    };
    MenuHangmanComponent.prototype.puntuacion = function () {
        this.app.mostrar = 2;
        console.log("mostrar puntuación");
    };
    return MenuHangmanComponent;
}());
MenuHangmanComponent = __decorate([
    core_1.Component({
        selector: 'menu-hangman',
        templateUrl: 'app/views/menu-hangman.html',
        providers: [tablero_hangman_1.TableroHangmanComponent]
    }),
    __metadata("design:paramtypes", [])
], MenuHangmanComponent);
exports.MenuHangmanComponent = MenuHangmanComponent;
//# sourceMappingURL=menu-hangman.js.map