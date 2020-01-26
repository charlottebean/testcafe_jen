import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class SweepstakesPage extends ExperiencesService {
  constructor() {
    super();
    this.sweepstakesEx = Selector('.experience-tab__wrapper').withText(
      'Sweepstakes'
    );
  }
}
