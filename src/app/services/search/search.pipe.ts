import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    term = term.toLowerCase();
    return items.filter(item => item.name.toLowerCase().indexOf(term) !== -1 || item.city.toLowerCase().indexOf(term) !== -1);
  }
}
