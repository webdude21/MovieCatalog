import { Page } from './page';

export class PageableEntity<T> {
  constructor(public page: Page, public totalRecords: number, public entities: T[]) {
  }
}
