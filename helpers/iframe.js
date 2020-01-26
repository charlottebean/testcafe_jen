import { Selector } from 'testcafe';

export default class Iframe {
  constructor() {
    this.iframeAccountPage = Selector('[name="tint-core-iframe"]');
    this.iframeSupportBot = Selector(
      '[title="Opens a widget where you can find more information"].zEWidget-launcher.zEWidget-launcher--active'
    );
    this.iframeWebWidget = Selector('#webWidget');
  }
}
