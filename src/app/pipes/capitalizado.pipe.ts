import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform 
{
    transform(value: string, arg1: boolean = true): string 
    {
        let nom = value.toLowerCase().split(" ");

        if (arg1)
            for (let i in nom)
                nom[i] = nom[i][0].toUpperCase() + nom[i].substr(1);
        else
            nom[0] = nom[0][0].toUpperCase() + nom[0].substr(1);

        return nom.join(" ");
    }
}