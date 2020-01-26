import { Role } from 'testcafe';
import { LoginPage } from '../pages/';
import IconsOnPages from '../helpers/icons';
require('dotenv').config();

const loginPage = new LoginPage();
const iconsOnPages = new IconsOnPages();

export const loggedFreeUser = Role('http://example.com/login', async t => {
    await t
      .typeText(loginPage.userEmail, lalalala)
      .typeText(loginPage.userPassword, lasasasa)
      .click(loginPage.rememberMeChecbox)
      .click(loginPage.submitButton);
  },
  { preserveUrl: true }
);
