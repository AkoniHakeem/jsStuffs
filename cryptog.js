const crypto = require('crypto');
const lib = {}

lib.hashPassword = (data) => {
    let hash = crypto.createHmac("sha-256", "thisisthekey").update(data).digest("hex");
    return hash;
}

lib.encrypt = (data) => {
    
}

module.exports = lib;