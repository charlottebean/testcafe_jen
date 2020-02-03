import {
  loggedGoogleUser,
  loggedFreeUser,
  loggedFacebookUser,
  loggedLinkedinUser,
  loggedHootsuiteUser
} from '../../helpers/role';
import UserAccountPage from '../../modules/user-account-page';
import { LoginPage } from '../../pages/';
import IconsOnPages from '../../helpers/icons';

const userAccount = new UserAccountPage();
const loginPage = new LoginPage();
const iconOnPages = new IconsOnPages();

fixture`Positive login in various ways`;

test('Should loggin to the tint using email and password', async t => {
  await t

    .useRole(loggedFreeUser)
    .expect(userAccount.userName.innerText)
    .eql('tester3-filestack')
    .click(iconOnPages.logOutIcon);
});

test('Should loggin to the tint using linkedin account', async t => {
  await t

    .useRole(loggedLinkedinUser)
    .expect(userAccount.userName.innerText)
    .eql('tester3-filestack')
    .click(iconOnPages.logOutIcon);
});

fixture`Negative login`.page`https://api.tintup.com/credentials/sign_in`;

test('login with wrong password', async t => {
  await t
    .typeText(loginPage.userEmail, 'tester@filestack.com')
    .typeText(loginPage.userPassword, 'lalalala')
    .click(loginPage.rememberMeChecbox)
    .click(loginPage.submitButton)
    .expect(loginPage.wrongCredentials.exists)
    .ok();
});

test('login with wrong email', async t => {
  await t
    .typeText(loginPage.userEmail, 'tester@gmail.com')
    .typeText(loginPage.userPassword, '12L*lalalala')
    .click(loginPage.rememberMeChecbox)
    .click(loginPage.submitButton)
    .expect(loginPage.wrongCredentials.exists)
    .ok();
});
