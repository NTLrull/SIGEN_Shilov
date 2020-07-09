const hmacSha256 = require('crypto-js/hmac-sha256'); 
const {domain} = require('./test_data/domain');
const request = require('supertest');
const users = require('./test_data/users');
const agent = request(domain.officeUrl)

function serializePayload(payload) {
        return Object
        .keys(payload) // get keys of payload object
        .sort() // sort keys
        .map((key) => key + "=" + encodeURIComponent(payload[key])) // each value should be url encoded. the most sensitive part for sign checking
        .join('&'); // to sting, separate with ampersand
}

// Generates auth headers
function getAuthHeaders(payload) {
    console.log('serial')
    console.log(serializePayload(payload))
    console.log('must be')
    console.log('country=25&crypto_cur=PZM&currency=RUB&limit=1&max_limit_sum=50&max_order_sum=50&min_order_sum=50&payment_method%5B0%5D=2&payment_method%5B1%5D=2&payment_type%5B0%5D=139&payment_type%5B1%5D=161&price=1&send_favorite=0&transaction_time=3600&type=1')
    const sign = hmacSha256(users.param.API_KEY + serializePayload(payload), users.param.SECRET).toString();
    // serializePayload(payload) работает не верно
    // Сейчас: payment_method=2%2C2
    // Надо: payment_method%5B0%5D=2&payment_method%5B1%5D=2
  return {
    'X-KEY': users.param.API_KEY,
    'X-SIGN': sign,
    'X-NONCE': Date.now()
  };
}

async function getTwoFactorMethod() {
    let payload = {
        type: 1,
        crypto_cur: 'PZM',
        currency: 'RUB',
        price: 1,
        transaction_time: 3600,
        min_order_sum: 50,
        max_order_sum: 50,
        limit: 1,
        max_limit_sum: 50,
        payment_method: [2,2],
        payment_type: [139,161],
        send_favorite: 0,
        country: 25

        
    };

    return await new Promise(function (resolve, reject) {
        return agent
            .post('/api/p2p/offer/create')
            .set('Accept', 'application/json')
            .set(getAuthHeaders(payload))
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(payload)
            .expect('Content-Type', /json/)
            .expect(res => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.success === true || res.body.status === 'success').toBeTruthy()
                console.log(res.body.run_time)
            })
            .end(function (err, res) {
                console.log(res.body)
                if (err) {
                    reject(`\r\n
                    Ошибка: ${err.stack.replace(/[\"\\]/g, '')}`)
                } else {
                    resolve(res)
                }
            })
    })
}

describe('api_sigen_user-proile_auth-method-list', () => {
    it('user-proile_auth-method-list 1.1', async () => {
        await getTwoFactorMethod()
    })
})
