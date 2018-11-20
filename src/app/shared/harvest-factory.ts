import { Harvest } from './Harvest';
export class HarvestFactory {

      static empty(): Harvest {
    return new Harvest('unknown',"unknown", '', '',"", new Date(), 'Ernten', false);
  }

   static fromObject(rawBook: any): Harvest {
    return new Harvest(
      rawBook.$key,
      rawBook.cuid,
      rawBook.name,
      rawBook.comment,
      rawBook.location,
      typeof(rawBook.date) === 'string' ?
        new Date(rawBook.date) : rawBook.date,
      rawBook.action,
      rawBook.isPublic
    );
  }
}
