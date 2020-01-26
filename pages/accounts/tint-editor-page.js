import { Selector } from 'testcafe';

export default class TintEditorPage {
  constructor() {
    this.addNewTintButton = Selector('button').withText('Add A TINT');
    this.addNewTint = Selector('#newTintUsername');
    this.createTintButton = Selector('button').withText('Create TINT');
    this.notNowGoalPopupChechbox = Selector('button').withText('Not Now');
    this.notNowAnalyticsCheckbox = Selector('button').withText('Not Now');
    this.tintDropdownSettingsDelete = Selector('.open .settings-item-remove');
    this.tintDropdownSettingsDeleteConfirm = Selector(
      '.btn.btn-confirm-modal.btn-confirm.btn-primary'
    );
  }
}
