import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../constants';

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value !== null && value !== undefined) {
      if (value > Constants.ONE_TRILLON) {
        return (value / Constants.ONE_TRILLON).toFixed(2) + 'T';
      }

      if (value > Constants.ONE_BILLION) {
        return (value / Constants.ONE_BILLION).toFixed(2) + 'B';
      }

      if (value > Constants.ONE_MILLION) {
        return (value / Constants.ONE_MILLION).toFixed(2) + 'M';
      }

      if (value > Constants.ONE_THOUSAND) {
        return (value / Constants.ONE_THOUSAND).toFixed(2) + 'K';
      }

      return value.toFixed(2) + '';
    }

    return '?';
  }

}
