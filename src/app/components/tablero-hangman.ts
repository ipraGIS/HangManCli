import { Component,  OnInit, } from '@angular/core';
import { ImagenHangmanComponent } from './imagen-hangman';
import { Http} from '@angular/http';



@Component({
    selector: 'tablero-hangman',
    templateUrl: '../views/tablero-hangman.html',
    styleUrls: ['./../app.component.css'],
    providers: [ImagenHangmanComponent]
})

export class TableroHangmanComponent implements OnInit {

    public peliculas: Array<string>;
    public oculta: string = '';
    public adivina: string = '';
    private solucion: string = '';
    private classInputResolver;
    private classModalResolver = 'modal';
    private urlPelis = '../../assets/peliculas.txt';
    static pelicula: string = '';
    static letrasError: Array<string> = [];
    static ganador = false;


    constructor(private http: Http) {

        this.classInputResolver = 'oculto';
        this.classModalResolver = 'oculto';

    }


    ngOnInit() {

        // recupera las peliculas de un archivo peliculas.txt
        this.getPelis();

        // Escucha el evento keyUp
        document.getElementById('inputLetra').addEventListener('keyup', this.handleInputLetra.bind(this));

    }

    private handleInputLetra(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 192) {// para la ñ
            this.compruebaLetra(e.key);
        }
    }

    // Carga las peliculas desde el archivo peliculas.txt
    private getPelis() {

        this.http.get(this.urlPelis).subscribe(data => {
            console.log('Mensajes cargados');
            const text2 = data.text().replace(/[\r\n]/g, '');
            this.peliculas = String.prototype.toUpperCase.apply(text2).split(',');
            this.setPeli();

        });
    }


    // Selecciona aleatoriamente una pelicula de entre las listadas.
    private setPeli() {

        const random = Math.floor(Math.random() * this.peliculas.length - 1) + 1
        TableroHangmanComponent.pelicula = this.peliculas[random];
        if (!TableroHangmanComponent.pelicula){
            return;
        }

        console.log(TableroHangmanComponent.pelicula);

        const palabrasPeli: String[] = TableroHangmanComponent.pelicula.split(' ');

        for (let i = 0; i < palabrasPeli.length; i++) {
            for (let j = 0; j < palabrasPeli[i].length; j++) {
                this.adivina += '_ ';
                this.oculta += palabrasPeli[i][j];
                this.oculta += ' ';
            }
            this.adivina += '/';
            this.oculta += '/';

        }
        this.adivina = this.adivina.substring(0, this.adivina.length - 1);
        this.oculta = this.oculta.substring(0, this.oculta.length - 1);
    }

    private compruebaLetra(key) {

        TableroHangmanComponent.pelicula.indexOf(key.toUpperCase()) > -1 ? this.completaPeli(key.toUpperCase()) : this.addLetraError(key.toUpperCase());

        // En caso de que adivine  la peli al completo 
        if(this.adivina.indexOf('_') == -1){
            TableroHangmanComponent.ganador = true;
            return;
        }

        let input = document.getElementById('inputLetra') as any;
        input.value = '';
    }

    private completaPeli(key) {

        for (let i = 0; i < this.oculta.length; i++) {
            if (this.oculta[i] === key) {
                this.adivina = this.adivina.substr(0, i) + key + this.adivina.substr(i + 1);
            }
        }
    }
    private addLetraError(key) {
        if (TableroHangmanComponent.letrasError.indexOf(key) < 0) {
            TableroHangmanComponent.letrasError.push(key);
        }

    }

    resolver() {
        this.solucion = '';
        document.getElementById('modal').style.visibility = 'visible';
        document.getElementById('inputResolver').focus();

    }

    checkSolucion() {
        if (this.solucion.toUpperCase() === TableroHangmanComponent.pelicula) {
            TableroHangmanComponent.ganador = true;
        }
        this.cerrar();
    }

    cerrar() {
        document.getElementById('modal').style.visibility = 'hidden';
        this.classInputResolver = 'oculto';
    }

}