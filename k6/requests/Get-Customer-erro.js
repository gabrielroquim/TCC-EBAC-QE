import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

export let GetCustomerDuration = new Trend('get_customer_duration');
export let GetCustomerFailRate = new Rate('get_customer_fail_rate');
export let GetCustomerSuccessRate = new Rate('get_customer_success_rate');
export let GetCustomerSuccessReqs = new Counter('get_customer_success_rate_counter');


export default class Login {
  token;

  acesso(username, password) {
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

    this.token = response.json('accessToken');
    check(response, {
      'status is 200': (r) => r.status === 200,
      'response body has expected fields': (r) => {
        const expectedFields = ['accessToken', 'username', 'email'];
        const responseBody = JSON.parse(r.body);
        return expectedFields.every((field) => field in responseBody);
      },
    });

    GetCustomerDuration.add(response.timings.duration);
    GetCustomerSuccessReqs.add(1);
    GetCustomerFailRate.add(response.status == 0 || response.status > 399);
    GetCustomerSuccessRate.add(response.status != 0 && response.status < 399);
    
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
