import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class SocialFeedCounterPage extends ExperiencesService {
  constructor() {
    super();
    this.socialFeedCounterEx = Selector('.experience-tab__wrapper').withText(
      'Social Feed Counter'
    );
  }
}
