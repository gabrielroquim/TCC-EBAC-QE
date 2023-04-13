import { createPact } from 'cypress-pact';
import 'dotenv/config'

describe('Pact Verification', () => {
  before(() => {
    // define os detalhes do provedor
    const provider = createPact({
      provider: 'coupons-client',
      providerBaseUrl: process.env.PROVIDER_URL,
      pactUrls: ['http://lojaebac.ebaconline.art.br/wp-json/wc/v3'],
      providerVersion: '1.0.0',
    });

    // inicializa o provedor
    provider.setup();
  });

  after(() => {
    // finaliza o provedor
    provider.finalize();
  });

  it('should validate the pact', () => {
    // executa a verificação do provedor
    return cy.task('pact:verify');
  });
});
