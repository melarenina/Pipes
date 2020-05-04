import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform{
    // It need to receive the value to be transformed
    transform(value: any, limit: number){
        if ( value.length > limit){
            return value.substr(0, limit) + ' ...';
        }else{
            return value;
        }
    }
}
