import { Selector } from 'testcafe';

export default class BillingPage {
  constructor() {
    this.billingHeader = Selector('.refresh').withText('Change Plan');
  }
}
