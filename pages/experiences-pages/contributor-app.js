import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class ContributorAppPage extends ExperiencesService {
  constructor() {
    super();
    this.contributorAppEx = Selector('.experience-tab__wrapper').withText(
      'Contributor App'
    );
  }
}
