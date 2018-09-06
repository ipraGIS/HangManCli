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
var imagen_hangman_1 = require("./imagen-hangman");
var http_1 = require("@angular/http");
var TableroHangmanComponent = /** @class */ (function () {
    function TableroHangmanComponent(http) {
        this.http = http;
        this.oculta = "";
        this.adivina = "";
        this.solucion = "";
        this.classModalResolver = "modal";
        this.urlPelis = "../../peliculas.txt";
        this.classInputResolver = "oculto";
        this.classModalResolver = "oculto";
    }
    TableroHangmanComponent_1 = TableroHangmanComponent;
    TableroHangmanComponent.prototype.ngOnInit = function () {
        //recupera las peliculas de un archivo peliculas.txt
        this.getPelis();
        //Escucha el evento keyUp
        document.getElementById("inputLetra").addEventListener('keyup', this.handleInputLetra.bind(this));
    };
    TableroHangmanComponent.prototype.handleInputLetra = function (e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 192) { // para la ñ
            this.compruebaLetra(e.key);
        }
    };
    // Carga las peliculas desde el archivo peliculas.txt
    TableroHangmanComponent.prototype.getPelis = function () {
        var _this = this;
        fetch(this.urlPelis, {
            method: 'GET',
            headers: new Headers()
        })
            .then(function (res) {
            return res.text();
        })
            .then(function (text) {
            console.log('Mensajes cargados');
            var text2 = text.replace(/[\r\n]/g, '');
            _this.peliculas = String.prototype.toUpperCase.apply(text2).split(",");
            _this.setPeli();
        })
            .catch(function () {
            console.log('Peliculas no cargados');
            alert('Error al cargar el archivo con las peliculas');
        });
    };
    // Selecciona aleatoriamente una pelicula de entre las listadas.
    TableroHangmanComponent.prototype.setPeli = function () {
        var random = Math.floor(Math.random() * this.peliculas.length - 1) + 1;
        TableroHangmanComponent_1.pelicula = this.peliculas[random];
        if (!TableroHangmanComponent_1.pelicula)
            return;
        console.log(TableroHangmanComponent_1.pelicula);
        var palabrasPeli = TableroHangmanComponent_1.pelicula.split(" ");
        for (var i = 0; i < palabrasPeli.length; i++) {
            for (var j = 0; j < palabrasPeli[i].length; j++) {
                this.adivina += "_ ";
                this.oculta += palabrasPeli[i][j];
                this.oculta += " ";
            }
            this.adivina += "/";
            this.oculta += "/";
        }
        this.adivina = this.adivina.substring(0, this.adivina.length - 1);
        this.oculta = this.oculta.substring(0, this.oculta.length - 1);
    };
    TableroHangmanComponent.prototype.compruebaLetra = function (key) {
        TableroHangmanComponent_1.pelicula.indexOf(key.toUpperCase()) > -1 ? this.completaPeli(key.toUpperCase()) : this.addLetraError(key.toUpperCase());
        //En caso de que adivine  la peli al completo 
        if (this.adivina.indexOf("_") == -1) {
            TableroHangmanComponent_1.ganador = true;
            return;
        }
        var input = document.getElementById("inputLetra");
        input.value = "";
    };
    TableroHangmanComponent.prototype.completaPeli = function (key) {
        for (var i = 0; i < this.oculta.length; i++) {
            if (this.oculta[i] === key) {
                this.adivina = this.adivina.substr(0, i) + key + this.adivina.substr(i + 1);
            }
        }
    };
    TableroHangmanComponent.prototype.addLetraError = function (key) {
        if (TableroHangmanComponent_1.letrasError.indexOf(key) < 0) {
            TableroHangmanComponent_1.letrasError.push(key);
        }
    };
    TableroHangmanComponent.prototype.resolver = function () {
        this.solucion = "";
        document.getElementById("modal").style.visibility = "visible";
        document.getElementById("inputResolver").focus();
    };
    TableroHangmanComponent.prototype.checkSolucion = function () {
        if (this.solucion.toUpperCase() === TableroHangmanComponent_1.pelicula) {
            TableroHangmanComponent_1.ganador = true;
        }
        this.cerrar();
    };
    TableroHangmanComponent.prototype.cerrar = function () {
        document.getElementById("modal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    };
    var TableroHangmanComponent_1;
    TableroHangmanComponent.pelicula = "";
    TableroHangmanComponent.letrasError = [];
    TableroHangmanComponent.ganador = false;
    TableroHangmanComponent = TableroHangmanComponent_1 = __decorate([
        core_1.Component({
            selector: 'tablero-hangman',
            templateUrl: 'app/views/tablero-hangman.html',
            providers: [imagen_hangman_1.ImagenHangmanComponent]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], TableroHangmanComponent);
    return TableroHangmanComponent;
}());
exports.TableroHangmanComponent = TableroHangmanComponent;
//# sourceMappingURL=tablero-hangman.js.map