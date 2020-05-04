import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform{
    // It need to receive the value to be transformed
    transform(value: any){
        if ( value.length > 10){
            return value.substr(0, 10) + ' ...';
        }else{
            return value;
        }
    }
}
