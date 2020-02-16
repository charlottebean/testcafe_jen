import {
  loggedGoogleUser,
  loggedFreeUser
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
