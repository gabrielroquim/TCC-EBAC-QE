import { Pact } from "@pact-foundation/pact" 
import 'dotenv/config'
import { resolve} from 'path'
const mockProvider = new Pact({
    consumer: 'coupons-admin',
    provider: 'coupons-client',
    port: process.env.MOCK_URL,
    log: resolve(process.cwd(), 'logs', 'pact.log'),
    dir: resolve(process.cwd(), 'pacts')

})

describe(' Consumer Test', () => {
    beforeAll(() =>{

    })

    it('should coupons', () => {
        
    });
});
    