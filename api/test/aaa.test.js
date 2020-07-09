const hmacSha256 = require('crypto-js/hmac-sha256'); 
const BASE_URL = 'http://web.sigen.geos.tom.ru:2180/v1';
const request = require('supertest')
const agent = request(BASE_URL)

//test data
const API_KEY = 'hfakjdfhkj832jkJKH&YTD#B#Ed6wbec32g6d6tasGJHGJHdhjagsagd';
const SECRET = 'JKhaSDGYY^@TGDHGSDA762TGJHASGDUAS7623EHBVSD7AST23BHJJGFCX6CTGSFS';

//Serialize for singing only. Can be used in request body if u like urlencoded form format instead of json
function serializePayload(payload) {
  return Object
    .keys(payload) // get keys of payload object
    .sort() // sort keys
    .map((key) => key + "=" + encodeURIComponent(payload[key])) // each value should be url encoded. the most sensitive part for sign checking
    .join('&'); // to sting, separate with ampersand
}

// Generates auth headers
function getAuthHeaders(payload) {
  // get SHA256 of <API_KEY><sorted urlencoded payload string><SECRET>
  const sign = hmacSha256(API_KEY + serializePayload(payload), SECRET).toString();

  return {
    'X-KEY': API_KEY,
    'X-SIGN': sign,
    'X-NONCE': Date.now()
  };
}

async function getTwoFactorMethod() {
    payload = {};

    return await new Promise(function(resolve, reject) {
        return agent
        .get(`/p2p/user/get-two-factor-method`)
        .set(getAuthHeaders(payload))
        .expect(res=> {
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
        })
        .end(function(err, res) {
            if (err) {
                reject(`\r\n
                Ошибка: ${err.stack.replace(/[\"\\]/g, '')}\r\n\r\n
                Данные: ${JSON.stringify(res, null, 2).replace(/[\"\\]/g, '')}`)
            } else {
                resolve(res)
            }
        })
   })
}


describe('tests', () => {
    it('test 1', async () => {
        await getTwoFactorMethod()
    });
});