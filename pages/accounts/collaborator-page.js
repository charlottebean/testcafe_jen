import { Selector } from 'testcafe';

export default class CollaboratorsPage {
  constructor() {
    this.addCollaboratorButton = Selector('.collaborator-add-btn').withText(
      'Add a Collaborator'
    );
    this.collaboratorEmail = Selector('#enterprise_account_add_email');
    this.collaboratorAllPermissions = Selector('.checkbox');
    this.collaboratorNextButton = Selector('.collaborator-account-submit');
    this.collaboratorTintsList = Selector('label').withText('Select All TINTs');
    this.collaboratorSendButton = Selector(
      '.btn.btn-primary.btn-lg.collaborator-custom-field-send'
    );
    this.collaboratorDeleteCreatedUser = Selector('.collaborator-tr')
      .withText('tester+collaborator@filestack.com')
      .find('.collaborator-delete-btn');
    this.collaboratoDeleteConfirm = Selector(
      '.btn.btn-confirm-modal.btn-confirm.btn-primary'
    );
  }
}
