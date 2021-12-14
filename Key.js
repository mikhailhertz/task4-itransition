const crypto = require('crypto')

class Key {
    constructor() {
        this.key = crypto.randomBytes(32)
    }
}
module.exports = Key