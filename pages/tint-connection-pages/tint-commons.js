import { Selector } from 'testcafe';

export default class TintCommonsPage {
  constructor() {
    //common features
    this.displayButton = Selector('#display-modal-button');
  }
}
