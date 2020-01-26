import { Selector } from 'testcafe';

export default class ZendeskPage {
  constructor() {
    this.zendeskRequestDemoButton = Selector('.scale').withText('Request Demo');
  }
}
