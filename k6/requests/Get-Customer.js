import http from 'k6/http';
import { Trend, Rate, Counter } from "k6/metrics";
import { sleep } from 'k6';
import { check, fail } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";



export let GetCustomerDuration = new Trend('get_customer_duration');
export let GetCustomerFailRate = new Rate('get_customer_fail_rate');
export let GetCustomerSuccessRate = new Rate('get_customer_success_rate');
export let GetCustomerSuccessReqs = new Counter('get_customer_success_rate_counter');

export default function () {
    
    const url = 'http://lojaebac.ebaconline.art.br/minha-conta/';
    const payload = {
        'username': 'gente@gente.com',
        'password': '10112020',
 
    };
    const cookies = {
        token: 'cf6aa4b3d6c71965ba4f1e159b6a07f6'
    };

    const response = http.post(url, payload, { cookies });


    check(response, {
        'status is 200': (r) => r.status === 200
    });

    GetCustomerDuration.add(response.timings.duration);
    GetCustomerSuccessReqs.add(1);
    GetCustomerFailRate.add(response.status == 0 || response.status > 399);
    GetCustomerSuccessRate.add(response.status != 0 && response.status < 399);

    let durationMsg = 'Máximo de duração da minha requisição $(25000/1000)s';
    if (check(response, {
        'máximo de duração': (r) => r.timings.duration < 25000,
    })) {
        fail(durationMsg);
    }
    sleep(1);
}
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }