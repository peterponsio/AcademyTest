import { Pipe, PipeTransform } from '@angular/core';
import { Meme } from 'src/models/post';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Meme[], text: string): Meme[] {
    console.log(list.filter(res=> res.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
    
    return text != "" && text != undefined ? list.filter(res=> res.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) : list;
  }

}
