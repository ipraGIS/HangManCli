import { Component, Input, OnInit } from '@angular/core';
import { TableroHangmanComponent } from './tablero-hangman';

@Component({
    selector: 'imagen-hangman',
    templateUrl: '../views/imagen-hangman.html',
    styleUrls: ['./../app.component.css']
})


export class ImagenHangmanComponent implements OnInit {
    @Input() ahorcadoSrc: string;
    private classInputResolver;
    public  ganador = false;

    constructor() {
        this.ahorcadoSrc = '../assets/images/ahorcado_0.svg';
    }

    ngOnInit() {
    }

    get _ganador(){
        return this.ganador;
    }

    set _ganador(g){
        this.ganador = g;
    }

    cerrar() {
        document.getElementById('modal').style.visibility = 'hidden';
        this.classInputResolver = 'oculto';
    }

    public getImage(){
        return this.updateImagen();
    }

    public  updateImagen(opcion?: number) {


        const fallos = TableroHangmanComponent.ganador  === true ? -1 : TableroHangmanComponent.letrasError.length;       
        switch (fallos) {
            case -1:
                this.ahorcadoSrc = '../assets/images/champion.svg';
                break;
            case 0:
                this.ahorcadoSrc = '../assets/images/ahorcado_0.svg'
                break;
            case 1:
                this.ahorcadoSrc = '../assets/images/ahorcado_1.svg'
                break;
            case 2:
                this.ahorcadoSrc = '../assets/images/ahorcado_2.svg'
                break;
            case 3:
                this.ahorcadoSrc = '../assets/images/ahorcado_3.svg'
                break;
            case 4:
                this.ahorcadoSrc = '../assets/images/ahorcado_4.svg';
                break;
            case 5:
                this.ahorcadoSrc = '../assets/images/ahorcado_5.svg';
                break;

            default:
                // cambiar imagen por defecto.
                this.ahorcadoSrc = '../assets/images/ahorcado_5.svg'
                break;

        }

        return this.ahorcadoSrc;

    }
}