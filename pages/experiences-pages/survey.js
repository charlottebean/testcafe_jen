import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class SurveyExbPage extends ExperiencesService {
  constructor() {
    super();
    this.surveyEx = Selector('.experience-tab__wrapper').withText('Survey');
  }
}
