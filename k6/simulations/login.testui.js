import { browser } from 'k6';
import { check } from 'k6';

export default function () {
  const myUrl = 'http://lojaebac.ebaconline.art.br/minha-conta/';
  const mySelector = 'h1';
  const res = browser.navigateTo(myUrl);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  const pageTitle = browser.$(mySelector).text();
  check(pageTitle, {
    'page title exists': (t) => t.length > 0,
  });
}


