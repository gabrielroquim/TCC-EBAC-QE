import { Verifier } from '@pact-foundation/pact';
import 'dotenv/config'

describe('Pact Verification', () => {
    it('should validate the pact', () => {
        const brokerOpts = {
            provider: 'coupons-client',
            providerBaseUrl: process.env.PROVIDER_URL,
            pactUrls: ['http://lojaebac.ebaconline.art.br/wp-json/wc/v3'],
            publishVerificationResult: true,
            providerVersion: '1.0.0'
        }
        return new Verifier(brokerOpts).verifyProvider()
    });
});