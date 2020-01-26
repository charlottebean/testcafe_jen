import { Selector } from 'testcafe';

export default class UserAccountPage {
  constructor() {
    this.userName = Selector(
      '.profile-dropdown-holder__toggle.dropdown-toggle'
    );
    this.notificationContainer = Selector('.notification-title-container');
    this.whatIsNewCircle = Selector('#HW_badge');
    this.supportBotButton = Selector('span').withText('Support');
    this.supportZendeskText = Selector('#Layer_1').withText('zendesk');
    this.dropdownManageCollaborators = Selector('span').withText(
      'Manage Collaborators'
    );
    this.dropdownGetMobileApp = Selector('span').withText('Get the Mobile App');
    this.dropdownMarketingIntegrations = Selector('span').withText(
      'Marketing Integrations'
    );
    this.dropdownAccountDashboard = Selector('span').withText(
      'Account Dashboard'
    );
  }
}
