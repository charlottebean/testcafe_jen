import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class CountdownPage extends ExperiencesService {
  constructor() {
    super();
    this.countdownEx = Selector('.experience-tab__wrapper').withText(
      'Countdown'
    );
    this.countdownPageEdit = Selector('.experience-row')
      .withText('CountdownAutoEdit')
      .find('a');
  }
}
