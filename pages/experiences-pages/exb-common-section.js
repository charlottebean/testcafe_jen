import { Selector, t } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class ExperienceCommonPage extends ExperiencesService {
  constructor() {
    super();
    //Experience builder commons
    this.newExperienceBuilder = Selector('.button-primary');
    this.goBackToExList = Selector('.fas.fa-chevron-circle-left');
    this.projectName = Selector('.tint-experience-settings-bar__left').find(
      'input'
    );
    this.previewButton = Selector('button').withText('Preview');
    this.publishButton = Selector('button').withText('Publish');
    this.copyUrlButton = Selector('.tint-experience-settings__copy-button');
    this.editExb = Selector('.experience-row');

    //MODAL COMMONS
    this.modalCancelButton = this.findElementInModal(
      this.exbModalElements.cancelButton
    );
    this.modalApplyButton = this.findElementInModal(
      this.exbModalElements.applyButton
    );
    this.modalDoneButton = this.findElementInModal(
      this.exbModalElements.doneButton
    );
    this.modalTabs = this.findElementInModal(this.exbModalElements.modalTab);
    this.secBackColor = this.findElementInModal(
      this.exbModalElements.modalPickerColorBack
    );
    this.uploadDesktopImage = this.findElementInModal(
      this.exbModalElements.uploadImage
    );
    this.uploadTabletImage = this.findElementInModal(
      this.exbModalElements.uploadImage
    );
    this.uploadMobileImage = this.findElementInModal(
      this.exbModalElements.uploadImage
    );
    this.titleOnModal = this.findElementInModal(
      this.exbModalElements.modalTitle
    );
    this.logoLink = this.findElementInModal(this.exbModalElements.modalInput);
    //Filepicker
    this.addImageModalSidebar = Selector('.fsp-modal__sidebar');
    this.addImageModalSidebarWeb = Selector('.fsp-icon--imagesearch');
    this.addImageModalSidebarUrl = Selector('.fsp-icon--url');
    this.addImageMyDevice = Selector('input[type=file]');
    this.addImageModalSidebarWebInput = Selector('.fsp-url-source__input');
    this.addImageModalSidebarWebSubmit = Selector(
      '.fsp-button.fsp-url-source__submit-button'
    );
    this.addImadeModalSidebarWebFirstImg = Selector(
      '.fsp-grid__icon.fsp-grid__thumbnail'
    );
    this.addImageModalSidebarUploadButton = Selector(
      '.fsp-button.fsp-button--primary'
    ).withText('Upload');
    this.filepickerHeader = Selector('.fsp-header-text--visible');
    this.imageUploaded = Selector('.fsp-transformer');
    //Datepicker
    this.datePickerCalendar = Selector('.tint-custom-data-picker');
    this.previousDate = Selector(
      '.react-datepicker__navigation.react-datepicker__navigation--previous'
    );
    this.nextDate = Selector(
      '.react-datepicker__navigation.react-datepicker__navigation--next'
    );
    this.twelfthDay = Selector(
      '.react-datepicker__day.react-datepicker__day--012'
    );
    this.twelfthDay = Selector(
      '.react-datepicker__day.react-datepicker__day--012'
    );
    this.firstDay = Selector(
      '.react-datepicker__day.react-datepicker__day--001'
    );
    //Timer settings - setTimeOne()
    this.timeHours = this.findElementInModal(
      this.exbModalElements.modalInput,
      0
    );
    this.timeMinutes = this.findElementInModal(
      this.exbModalElements.modalInput,
      1
    );
    this.timeDayTimeDropdown = this.findElementInModal(
      this.exbModalElements.modalDropdown,
      0
    );
    this.timeDayTimeSelect = this.findElementInModal(
      this.exbModalElements.selectDropdown
    );
    this.timeDateFormatDropdown = this.findElementInModal(
      this.exbModalElements.modalDropdown,
      1
    );
    this.timeDateFormatSelect = this.findElementInModal(
      this.exbModalElements.selectDropdown
    );
    //TimerSettings - setTimeTwo()
    this.timeHoursTwo = Selector(
      '.tint-timer__container .input-primary'
    ).withAttribute('data-testid', 'input_hours');
    this.timeMinutesTwo = Selector(
      '.tint-timer__container .input-primary'
    ).withAttribute('data-testid', 'input_minutes');
    // Succes Message
    this.successMesLine1 = this.findElementInModal(
      this.exbModalElements.modalInput,
      0
    );
    this.successMesLine2 = this.findElementInModal(
      this.exbModalElements.modalInput,
      1
    );
    this.successMessButton = this.findElementInModal(
      this.exbModalElements.successMessAddLink
    );
    this.successMessButtonText = this.findElementInModal(
      this.exbModalElements.modalInput,
      2
    );
    this.successMessButtonUrl = this.findElementInModal(
      this.exbModalElements.modalInput,
      3
    );
    this.successMesConfirmationModal = Selector(
      '.tint-page-section--form__submission-container'
    );
    this.successMesConfirmationHeaderModal = Selector(
      '.tint-page-section--form__submission-container__header'
    );
    this.successMesConfirmationDescModal = Selector(
      '.tint-page-section--form__submission-container__description'
    );
    this.successMesConfirmationButtonModal = Selector(
      '.tint-submission-success'
    );
    //Text area
    this.textAreaOnEditor = Selector('textarea');
    this.textAreaOnTP = Selector('.tint-customizable-text');
    this.selectColorText = Selector('.tint-menu-color__icon.fas.fa-font');
    this.selectColorArea = Selector('.tint-menu-color__icon.fas.fa-marker');
    this.boldText = Selector('.tint-font-menu__icon.far.fa-bold');
    this.italicText = Selector('.tint-font-menu__icon.far.fa-italic');
    this.underlineText = Selector('.tint-font-menu__icon.far.fa-underline');
    this.colorPickerPalette = Selector('.chrome-picker ');
    this.colorPickerHex = Selector('.chrome-picker input');
    this.textUrl = Selector('.tint-font-menu__icon.fas.fa-link');
    this.textUrlInput = Selector('#tint-font-menu-url-input');
    this.textUrlApply = Selector('.icon.fas.fa-check');
    this.iconFontSize = Selector('.font-size-dropdown');
    this.fontSizeSelect = Selector('option');
    this.fontTypeDropdown = Selector('.tint-edit-input-dropdown-container');
    this.fontTypeSelect = Selector('option');

    this.headerSection = this.getSectionSelector(this.exbSection.HEADER);
    this.bannerSection = this.getSectionSelector(this.exbSection.BANNER);
    this.tintSection = this.getSectionSelector(this.exbSection.TINT);
    this.timerSection = this.getSectionSelector(this.exbSection.TIMER);
    this.formSection = this.getSectionSelector(this.exbSection.FORM);
    this.backToTopSection = this.getSectionSelector(
      this.exbSection.BACK_TO_TOP
    );
    this.postSection = this.getSectionSelector(this.exbSection.POST);
    this.pollSection = this.getSectionSelector(this.exbSection.POLL);
    this.socialSection = this.getSectionSelector(this.exbSection.SOCIAL);
    this.footerSection = this.getSectionSelector(this.exbSection.FOOTER);
    this.headlineSection = this.getSectionSelector(this.exbSection.HEADLINE);
    this.paragraphSection = this.getSectionSelector(this.exbSection.PARAGRAPH);
    this.spacerSection = this.getSectionSelector(this.exbSection.SPACER);
    this.buttonSection = this.getSectionSelector(this.exbSection.BUTTON);
    this.surveySection = this.getSectionSelector(this.exbSection.SURVEY);
    this.surveyCounterSection = this.getSectionSelector(
      this.exbSection.SURVEY_COUNTER
    );
    this.counterSection = this.getSectionSelector(this.exbSection.COUNTER);
    this.tagOWarSection = this.getSectionSelector(this.exbSection.TAGOWAR);
  }
}
