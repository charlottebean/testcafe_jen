import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class LinkInBioPage extends ExperiencesService {
  constructor() {
    super();
    this.linkInBioEx = Selector('.experience-tab__wrapper').withText(
      'Link In Bio'
    );
    this.linkInBioPageEdit = Selector('.experience-row')
      .withText('LinkInBioAutoEdit')
      .find('a');
  }
}
