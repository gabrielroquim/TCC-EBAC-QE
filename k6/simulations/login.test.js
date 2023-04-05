import { group } from 'k6';
import Login from '../requests/Get-Customer.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
        { duration: '90s', target: 10 },
        { duration: '20s', target: 20 },
        { duration: '10s', target: 10 },

    ],
    thresholds: {
        http_req_duration: ['p(99) < 10000']
    }
} 


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

let users = [
  {
    username: 'user1_ebac',
    password: 'psw!ebac@test',
  },
  {
    username: 'user2_ebac',
    password: 'psw!ebac@test',
  },
  {
    username: 'user3_ebac',
    password: 'psw!ebac@test',
  },
  {
    username: 'user4_ebac',
    password: 'psw!ebac@test',
  },
  {
    username: 'user5_ebac',
    password: 'psw!ebac@test',
  },
];

export default function () {
  group('Login', () => {
    for (let user of users) {
      let login = new Login();
      login.acesso(user.username, user.password);
    }
  });
}
