import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class InteractivePoll extends ExperiencesService {
  constructor() {
    super();
    this.interactivePollEx = Selector('.experience-tab__wrapper').withText(
      'Interactive Poll'
    );
  }
}
