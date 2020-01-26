import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class LandingPage extends ExperiencesService {
  constructor() {
    super();
    this.landingEx = Selector('.experience-tab__wrapper').withText(
      'Landing Page'
    );
    this.landingpageEdit = Selector('.experience-row')
      .withText('LandingPageAutoEdit')
      .find('a');
  }
}
