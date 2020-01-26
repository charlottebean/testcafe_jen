import { Selector } from 'testcafe';

export default class TintTumblrPage {
  constructor() {
    this.tumblrHashtagTab = Selector(
      '.advanced-feed-type-tabedit-content-tb-modal-li-hashtags > a'
    );
    this.tumblrHashtagText = Selector(
      '.edit-content-tb-modal-connect-hash-input'
    );
    this.tumblrAddButton = Selector('.edit-content-tb-modal-connect-hash-btn');
    this.tumblrConnection = Selector('.feed-label-without-prefix').withText(
      'dog'
    );
  }
}
