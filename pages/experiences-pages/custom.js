import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

const customSecModal = Selector('.tint-custom-component');

export default class CustomPage extends ExperiencesService {
  constructor() {
    super();

    this.removeBannerSec = this.findElementInSection(
      this.exbSection.BANNER,
      this.exbSectionElements.iconRemoveSec
    );
    this.removeTintSec = this.findElementInSection(
      this.exbSection.TINT,
      this.exbSectionElements.iconRemoveSec
    );
    this.removeSocialSec = this.findElementInSection(
      this.exbSection.SOCIAL,
      this.exbSectionElements.iconRemoveSec
    );
    this.addCustomSec = this.findElementInSection(
      this.exbSection.HEADER,
      this.exbSectionElements.iconAddCustomSec
    );
    this.addHeadlineSec = customSecModal.withText('Headline');
    this.addParagraphSec = customSecModal.withText('Paragraph');
    this.addButtonSec = customSecModal.withText('Button');
    this.addSpacerSec = customSecModal.withText('Spacer');
    this.addTintSec = customSecModal.withText('TINT');
    this.addTimerSec = customSecModal.withText('Timer');
    this.addSocialSec = customSecModal.withText('Social');
    this.addFormSec = customSecModal.withText('Form');
    this.addCounterSec = customSecModal.withText('Counter');
  }
}
