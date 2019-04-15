import { Component } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    nombre = "Miguel";
    nombre2 = "mIGUel AngEl rubI RicO";
    title = 'pipes';

    PI = Math.PI;
    a = 0.234;
    salario = 1234.5;

    heroe =
    {
        nombre: "Logan",
        clave: "Wolverine",
        edad: 500,

        direccion: 
        {
            calle: "Primera",
            casa: "19"
        }
    }

    valorDePromesa = new Promise((resolve, reject) => 
    {
        setTimeout(()=> resolve('Llego la data!'), 4000);
    });

    fecha = new Date();

    activar:boolean = true;
}
