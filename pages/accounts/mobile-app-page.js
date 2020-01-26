import { Selector } from 'testcafe';

export default class MobileAppPage {
  constructor() {
    this.mobilePopupContent = Selector('.modal-content');
    this.closeMobilePopup = Selector('.close').withText('×');
  }
}
