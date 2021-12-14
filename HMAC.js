const crypto = require('crypto');

class HMAC {
    constructor(message, key) {
        this.hash = crypto.createHmac('sha256', key.key).update(message).digest('hex')
    }
}
module.exports = HMAC