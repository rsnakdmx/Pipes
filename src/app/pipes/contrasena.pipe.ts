import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform 
{

    transform(value: string, args?: boolean): string 
    {
        let ret:string = '';

        if (args)
            for (let i = 0; i < value.length; i++)
                ret += '*';
        
        else
            ret = value;
        
        return ret;
    }

}
