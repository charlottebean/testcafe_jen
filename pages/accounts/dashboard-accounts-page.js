import { Selector } from 'testcafe';

export default class DashboardAccountsPage {
  constructor() {
    this.addAccountButton = Selector('span').withText('Add Account');
    this.AccountHeader = Selector('header');
  }
}
