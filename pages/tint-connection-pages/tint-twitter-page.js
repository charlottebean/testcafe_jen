import { Selector } from 'testcafe';

export default class TintTwitterPage {
  constructor() {
    this.twitterModal = Selector('#twitter-modal');
    this.twitterBird = Selector('.fab.fa-twitter');
    this.twitterHashtagTab = Selector('#twitter-modal')
      .find('a')
      .withText('Hashtag');
    this.twitterHashtagText = Selector('.connect-hash-input.form-control');
    this.twitterAddButton = Selector('.connect-hash-btn');
    this.twitterConnection = Selector('.feed-label-without-prefix').withText(
      'cat'
    );
    this.twitterUsernameTab = Selector('#twitter-modal')
      .find('a')
      .withText('Username');
    this.tintContentTab = Selector('.edit-accordion-content');
  }
}
