import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

export let getCustomerDuration = new Trend('get_customer_duration');
export let getCustomerFailRate = new Rate('get_customer_fail_rate');
export let getCustomerSuccessRate = new Rate('get_customer_success_rate');
export let getCustomerSuccessRateCounter = new Counter('get_customer_success_rate_counter');

export default class Login {
  token;

  acesso(username, password) {
    let start = Date.now();
    let response = http.post(
      'http://lojaebac.ebaconline.art.br/minha-conta/',
      JSON.stringify({
        username: username,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    let end = Date.now();
    console.log(`Request took ${end - start}ms`);
    this.token = response.json('accessToken');
    check(response, {
      'status is 200': (r) => r.status === 200,
    });

    getCustomerDuration.add(response.timings.duration);
    getCustomerSuccessRateCounter.add(1);
    getCustomerFailRate.add(response.status == 0 || response.status > 399);
    getCustomerSuccessRate.add(response.status != 0 && response.status < 399);

  }

  getToken() {
    return this.token;
  }
}

export function setup() {
  for (let user of users) {
    let login = new Login();
    login.acesso(user.username, user.password);
  }
  sleep(1);
}
