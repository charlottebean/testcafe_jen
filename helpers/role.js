import { Role } from 'testcafe';
import { LoginPage } from '../pages/';
import IconsOnPages from '../helpers/icons';
require('dotenv').config();

const loginPage = new LoginPage();
const iconsOnPages = new IconsOnPages();

export const loggedFreeUser = Role('http://example.com/login', async t => {
    await t
      .typeText(loginPage.userEmail, process.env.USER_EMAIL)
      .typeText(loginPage.userPassword, process.env.USER_PASSWORD)
      .click(loginPage.rememberMeChecbox)
      .click(loginPage.submitButton);
  },
  { preserveUrl: true }
);

export const loggedLinkedinUser = Role(
  process.env.LOGGIN_URL,
  async t => {
    await t
      .click(iconsOnPages.linkedinAccountIcon)
      .typeText(
        loginPage.linkedinAccountPassword,
        process.env.LINKEDIN_USER_PASSWORD
      )
      .typeText(loginPage.linkedinAccountEmail, process.env.LINKEDIN_USER_EMAIL)
      .click(loginPage.linkedinAccountLoginButton);
  },
  { preserveUrl: true }
);
export const loggedHootsuiteUser = Role(
  process.env.LOGGIN_URL,
  async t => {
    await t
      .click(iconsOnPages.hootsuiteAccountIcon)
      .typeText(
        loginPage.hootsuiteAccountPassword,
        process.env.HOOTSUITE_USER_PASSWORD
      )
      .typeText(
        loginPage.hootsuiteAccountEmail,
        process.env.HOOTSUITE_USER_EMAIL
      )
      .click(loginPage.hootsuiteAccountLoginButton)
      .click(loginPage.hootsuiteAllowButton);
  },
  { preserveUrl: true }
);
