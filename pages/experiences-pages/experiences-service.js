import { Selector } from 'testcafe';

export default class ExperiencesService {
  constructor() {}
  exbModalElements = {
    cancelButton: '.tint-btn.tint-btn--secondary',
    applyButton: '.tint-btn.tint-btn--primary.tint-btn--long',
    doneButton: '.tint-btn.tint-btn--primary',
    uploadLogo: '.tint-btn.tint-btn--gray.tint-btn--full-width.undefined',
    removeImage: '.tint-btn.tint-btn--gray.tint-btn--full-width.undefined',
    uploadImage: '.tint-edit-upload-design__upload-container',
    modalDropdown: '.tint-edit-input-dropdown-container',
    selectDropdown: 'option',
    modalInput: '.tint-edit-input-container    ',
    modalDate: '.fas.fa-calendar-alt.tint-custom-data-picker__calendar-icon',
    modalPickerColorBack:
      '.tint-edit-upload-design .tint-edit-input-container.tint-edit-input-container--readonly',
    modalPickerColor:
      '.tint-edit-input-container.tint-edit-input-container--readonly ',
    modalColorPickerTable: '.chrome-picker ',
    modalColorPickerHex: 'input',
    colorInput: 'input',
    modalTitle: '.tint-edit-modal__header__title',
    modalButton: 'button',
    modalTab: 'span',
    slider: '.input-primary input',
    formSingleLine: '.tint-edit-form-content__button',
    formupload: '.tint-edit-form-content__line-adder-element',
    formAddLink: '.form-section-add-link',
    addSuccessMes: '.tint-edit-form-content__line-adder-element',
    successMessAddLink: '.form-section-add-link'
  };
  exbSectionElements = {
    textareaEl: 'textarea',
    textareaTP: '.tint-customizable-text',
    fontType: '.tint-edit-input-dropdown-container',
    fontTypeSelect: 'option',
    iconFontSize: '.font-size-dropdown',
    fontSizeSelect: 'option',
    iconColorPickerText: '.tint-menu-color__icon.fas.fa-font',
    iconColorPickerArea: '.tint-menu-color__icon.fas.fa-marker',
    iconBoldText: '.tint-font-menu__icon.far.fa-bold',
    iconItalicText: '.tint-font-menu__icon.far.fa-italic',
    iconUnderlineText: '.tint-font-menu__icon.far.fa-underline',
    iconLinkText: '.tint-font-menu__icon.fas.fa-link',
    linkTextInput: 'input',
    iconLinkTextApply: '.icon.fas.fa-check',
    colorPickerTable: '.chrome-picker ',
    colorPickerHex: 'input',
    iconOpenModal: '.fas.fa-pen',
    iconSocialInstagram: '.fab.fa-instagram',
    iconSocialFacebook: '.fab.fa-facebook',
    iconSocialTwitter: '.fab.fa-twitter',
    iconSocialLinkedin: '.fab.fa-linkedin-in',
    iconSocialYoutube: '.fab.fa-youtube',
    iconSocialPinterest: '.fab.fa-pinterest',
    iconSocialTumblr: '.fab.fa-tumblr',
    iconSocialVimeo: '.fab.fa-vimeo-v',
    footerInformation: '.tint-page-section__footer-information--copyrights',
    footerInformationNav: '.footer-section-nav',
    tintPostArea: '.tintup',
    iconAddCustomSec: '.tint-add-block .fas.fa-plus',
    iconRemoveSec: '.fas.fa-trash',
    customButton: '.tint-custom-button',
    formPlaceholder: 'input',
    formPlaceholderArea: 'textarea',
    termsCheck: '#terms',
    rulesCheck: '#contentRules',
    optCheck: '#opt_in',
    sendButton: 'button',
    formConfirm: '.tint-page-section--form__submission-container',
    formConfirmHeader: '.tint-page-section--form__submission-container__header',
    formConfirmDesc:
      '.tint-page-section--form__submission-container__description',
    formButton: '.tint-submission-success',
    uploadPhoto: '.tint-experience-upload-button',
    timeNumber: '.tint-page-section--timer__number-container__time',
    timeLabel: '.tint-page-section--timer__number-container__label',
    timeDivider: '.tint-page-section--timer__number-container__time__line',
    timeEndTitle: '.timer-count-down-container__end-title',
    timeContainer: '.tint-page-section--timer__number-container',
    submitPhoto: '.tint-page-section--post__submit-button',
    postPopup: '.modal-content',
    popupHeader: '.modal-header',
    popupFooter: '.modal-footer',
    popupAddFile: '.tint-btn.tint-btn--gray.tint-btn--full-width',
    popupInput: '.tint-edit-input-container    ',
    popupCheckbox: '.tint-edit-checkbox-container__label'
  };
  modalSelector = '#tintup-edit-modal';
  sectionSelector = '.tint-page-section';
  customSecSelector = '.tint-custom-section';
  exbSection = {
    BANNER: 'banner',
    HEADER: 'header',
    TINT: 'tint',
    TIMER: 'timer',
    FORM: 'form',
    BACK_TO_TOP: 'back-to-top',
    POST: 'post',
    POLL: 'poll',
    SOCIAL: 'social',
    FOOTER: 'footer',
    HEADLINE: 'headline',
    BUTTON: 'button',
    SPACER: 'spacer',
    PARAGRAPH: 'paragraph',
    SURVEY: 'survey',
    COUNTER: 'social-feed-counter',
    TAGOWAR: 'tag-o-war',
    SURVEY_COUNTER: 'survey_counter'
  };

  findElementInSection(section, elClass, elNth = 0) {
    return elNth === 0
      ? this.getSectionSelector(section).find(elClass)
      : this.getSectionSelector(section)
          .find(elClass)
          .nth(elNth);
  }
  findElementInModal(elClass, elNth = 0) {
    return elNth === 0
      ? Selector(this.modalSelector).find(elClass)
      : Selector(this.modalSelector)
          .find(elClass)
          .nth(elNth);
  }
  getSectionSelector(section) {
    switch (section) {
      case this.exbSection.HEADER:
        return Selector(`${this.sectionSelector}--${this.exbSection.HEADER}`);
      case this.exbSection.BANNER:
        return Selector(`${this.sectionSelector}--${this.exbSection.BANNER}`);
      case this.exbSection.TINT:
        return Selector(`${this.sectionSelector}--${this.exbSection.TINT}`);
      case this.exbSection.TIMER:
        return Selector(`${this.sectionSelector}--${this.exbSection.TIMER}`);
      case this.exbSection.FORM:
        return Selector(`${this.sectionSelector}--${this.exbSection.FORM}`);
      case this.exbSection.BACK_TO_TOP:
        return Selector(
          `${this.sectionSelector}--${this.exbSection.BACK_TO_TOP}`
        );
      case this.exbSection.POST:
        return Selector(`${this.sectionSelector}--${this.exbSection.POST}`);
      case this.exbSection.POLL:
        return Selector(`${this.sectionSelector}--${this.exbSection.POLL}`);
      case this.exbSection.SOCIAL:
        return Selector(`${this.sectionSelector}--${this.exbSection.SOCIAL}`);
      case this.exbSection.FOOTER:
        return Selector(`${this.sectionSelector}--${this.exbSection.FOOTER}`);
      case this.exbSection.HEADLINE:
        return Selector(`${this.sectionSelector}--${this.exbSection.HEADLINE}`);
      case this.exbSection.BUTTON:
        return Selector(`${this.customSecSelector}--${this.exbSection.BUTTON}`);
      case this.exbSection.SPACER:
        return Selector(`${this.customSecSelector}--${this.exbSection.SPACER}`);
      case this.exbSection.PARAGRAPH:
        return Selector(
          `${this.sectionSelector}--${this.exbSection.PARAGRAPH}`
        );
      case this.exbSection.SURVEY:
        return Selector(`${this.sectionSelector}--${this.exbSection.SURVEY}`);
      case this.exbSection.SURVEY_COUNTER:
        return Selector(
          `${this.sectionSelector}--${this.exbSection.SURVEY_COUNTER}`
        );
      case this.exbSection.COUNTER:
        return Selector(`${this.sectionSelector}--${this.exbSection.COUNTER}`);
      case this.exbSection.TAGOWAR:
        return Selector(`${this.sectionSelector}--${this.exbSection.TAGOWAR}`);
    }
  }
}
