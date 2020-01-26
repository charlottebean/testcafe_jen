import { Selector } from 'testcafe';

export default class IconsOnPages {
  constructor() {
    this.experiencesIcon = Selector('.fas.fa-megaphone');
    this.assetIcon = Selector('.fas.fa-shapes');
    this.logOutIcon = Selector('.fas.fa-sign-out');
    this.helpCenterIcon = Selector('.fas.fa-life-ring');
    this.billingIcon = Selector('.fas.fa-dollar-sign');
    this.settingsIcon = Selector('.fas.fa-cog');
    this.tintMixIcon = Selector('.fas.fa-columns');
    this.tintEditorIcon = Selector('.fas.fa-th-large');
    this.notificationIcon = Selector('.fas.fa-bell');
    this.collaboratorDeleteIcon = Selector('.collaborator-delete-btn');
    this.tintDropdownSettingsIcon = Selector('.tint-item')
      .withText('automatycznytint12345')
      .find('.fas.fa-cog');
    this.facebookAccountIcon = Selector('.icon-facebook');
    this.googleAccountIcon = Selector('.btn.btn-oauth.btn-oauth-google').find(
      'img'
    );
    this.linkedinAccountIcon = Selector('.icon-linkedin');
    this.hootsuiteAccountIcon = Selector('.btn-oauth-hootsuite');
    this.tumblrIcon = Selector('.fab.fa-tumblr');
    this.twitterIcon = Selector('.fab.fa-twitter');
    this.experienceSettingsIcon = Selector(
      '.tint-experience-settings-bar__right__settings'
    ).find('.fas.fa-cog');
  }
}
