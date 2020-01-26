import { Selector } from 'testcafe';

export default class SettingsPage {
  constructor() {
    this.settingsChangeEmail = Selector('#change-email-button');
    this.settingsPassword = Selector('#password.form-control');
    this.settingsNewEmail = Selector('#new_email.form-control');
    this.settingsChangeEmailSubmit = Selector('#submit-change-email');
    this.settingsChangePassword = Selector('#change-password-button');
    this.settingsOldPassword = Selector('#old_password.form-control');
    this.settingsNewPassword = Selector('#new_password.form-control');
    this.settingsConfirmPassword = Selector(
      '#confirm_new_password.form-control'
    );
    this.settingsChangePasswordSubmit = Selector('#submit-change-password');
    this.settingsCurrentEmail = Selector('h3>strong');
    this.generateApiKey = Selector('#api-btn');
    this.generateApiKeyAgree = Selector(
      '.settings-action-generate-token.btn.btn-primary'
    );
    this.apiKeyValue = Selector('p#api');
  }
}
