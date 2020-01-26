import { Selector } from 'testcafe';
import ExperiencesService from './experiences-service';

export default class TagOWarExbPage extends ExperiencesService {
  constructor() {
    super();
    this.tagOWarEx = Selector('.experience-tab__wrapper').withText('Tag-o-War');

    //   //TAG O WAR
    //   this.leftSideTint = leftSide.nth(0).withText('tinttoexb');
    //   this.leftSideSocialFeed = leftSide
    //     .nth(1)
    //     .withText('#macklemore (\n              twitter)');
    //   this.rightSideTint = rightSide.nth(0).withText('tinttoexb');
    //   this.rightSideSocialFeed = rightSide
    //     .nth(1)
    //     .withText('#macklemore (\n              tumblr)');

    //   this.tagOWarModalEditor = this.findElementInSection(
    //     this.exbSection.TAGOWAR,
    //     this.exbSectionElements.iconOpenModal
    //   );
    //   this.tagOWarLeftTintDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     0
    //   );
    //   this.tagOWarLeftTintSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagOWarLeftTintHashDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     1
    //   );
    //   this.tagOWarLeftTintHashSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagOWarRightTintDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     2
    //   );
    //   this.tagOWarRightTintSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagOWarRightTintHashDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     3
    //   );
    //   this.tagOWarRightTintHashSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagOWarStartHours = this.findElementInModal(
    //     this.exbModalElements.modalInput,
    //     0
    //   );
    //   this.tagOWarStartMinutes = this.findElementInModal(
    //     this.exbModalElements.modalInput,
    //     1
    //   );
    //   this.tagOWarStartDayTimeDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     4
    //   );
    //   this.tagOWarStartDayTimeSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagOWarEndHours = this.findElementInModal(
    //     this.exbModalElements.modalInput,
    //     2
    //   );
    //   this.tagOWarEndMinutes = this.findElementInModal(
    //     this.exbModalElements.modalInput,
    //     3
    //   );
    //   this.tagOWarEndDayTimeDropdown = this.findElementInModal(
    //     this.exbModalElements.modalDropdown,
    //     5
    //   );
    //   this.tagOWarEndDayTimeSelect = this.findElementInModal(
    //     this.exbModalElements.selectDropdown
    //   );
    //   this.tagLeftPrimaryColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     0
    //   );
    //   this.tagLeftPrimaryColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagLeftSecondaryColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     1
    //   );
    //   this.tagLeftSecondaryColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagLeftTextColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     2
    //   );
    //   this.tagLeftTextColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagLeftBackColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     3
    //   );
    //   this.tagLeftBackColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagLeftPostColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     4
    //   );
    //   this.tagLeftPostColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );

    //   this.tagRightPrimaryColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     5
    //   );
    //   this.tagRightPrimaryColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagRightSecondaryColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     6
    //   );
    //   this.tagRightSecondaryColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagRightTextColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     7
    //   );
    //   this.tagRightTextColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagRightBackColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     8
    //   );
    //   this.tagRightBackColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
    //   this.tagRightPostColor = this.findElementInModal(
    //     this.exbModalElements.modalPickerColor,
    //     9
    //   );
    //   this.tagRightPostColorSet = this.findElementInModal(
    //     this.exbModalElements.modalColorPickerTable
    //   );
  }
}
