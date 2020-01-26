import { Selector } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.userEmail = Selector('#credential_email');
    this.userPassword = Selector('#credential_password');
    this.rememberMeChecbox = Selector('#credential_remember_me');
    this.submitButton = Selector('[name="commit"]');
    this.wrongCredentials = Selector('#flash_alert').withText(
      'Invalid Email or password.'
    );
    //google account
    this.googleAccountEmail = Selector('#identifierId');
    this.googleEmailNextButton = Selector('#identifierNext');
    this.googleAccountPassword = Selector(
      '.whsOnd.zHQkBf[name="password"][data-initial-dir="ltr"]'
    );
    this.googleAPasswordNextButton = Selector('#passwordNext');
    //facebook account
    this.facebookAccountEmail = Selector('#email');
    this.facebookAccountPassword = Selector('#pass');
    this.facebookAccountLoginButton = Selector('#loginbutton');
    //linkedin account
    this.linkedinAccountEmail = Selector('#username');
    this.linkedinAccountPassword = Selector('#password');
    this.linkedinAccountLoginButton = Selector(
      '.btn__primary--large.from__button--floating'
    );
    //hootsuite account
    this.hootsuiteAccountEmail = Selector('#loginEmailInput');
    this.hootsuiteAccountPassword = Selector('#loginPasswordInput');
    this.hootsuiteAllowButton = Selector('.actions__action.btn.btn--primary');
    this.hootsuiteAccountLoginButton = Selector('.button');
    //twitter account
    this.twitterAccountEmail = Selector('#username_or_email');
    this.twitterAccountPassword = Selector('#password');
    this.twitterAccountLoginButton = Selector('#allow');
    //create an account
    this.singUpLink = Selector('a').withText('Sign Up');
    this.singUpEmail = Selector('#credential_email');
    this.signUpFirstName = Selector('#credential_auth_user_fields_firstname');
    this.signUpLastName = Selector('#credential_auth_user_fields_lastname');
    this.signUpPhone = Selector('#credential_auth_user_fields_phone');
    this.signUpPassword = Selector('#credential_password');
    this.signUpPasswordConfirmation = Selector(
      '#credential_password_confirmation'
    );
    this.createAccountButton = Selector('#new_credential').find(
      '[name="commit"]'
    );
  }
}
