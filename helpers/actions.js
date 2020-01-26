import { ClientFunction } from 'testcafe';

const getZendeskPage = ClientFunction(() => window.location.href);
const browserscroll = ClientFunction(function() {
  window.scrollBy(0, 500);
});

export {
  getZendeskPage,
  browserscroll
};
