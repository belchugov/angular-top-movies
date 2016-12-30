import { Pipe, PipeTransform } from '@angular/core';

function sortAsc(x: string, y: string) {
  return x.localeCompare(y);
}

function sortDesc(x, y) {
  return y.localeCompare(x);
}

@Pipe({
  name: 'sort'
})
export class SortMoviePipe implements PipeTransform {

  transform(items: any[], sortBy?: string, isDesc = false) {
    if (!items) {
      return;
    }
    let compareFunc = isDesc ? sortDesc : sortAsc;

    if (sortBy) {
      if (isDesc) {
        return items.sort((x, y) => {
            return compareFunc(x[sortBy].toString(), y[sortBy].toString());
        });
      } else {
        return items.sort((x, y) => {
          return compareFunc(x[sortBy].toString(), y[sortBy].toString());
        });
      }
    } else {
      return items.sort(compareFunc);
    }
  }

}
