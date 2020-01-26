import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class ContestPage extends ExperiencesService {
  constructor() {
    super();
    this.contestEx = Selector('.experience-tab__wrapper').withText('Contest');
    this.contestEdit = Selector('.experience-row')
      .withText('ContestAutoEdit')
      .find('a');
  }
}
