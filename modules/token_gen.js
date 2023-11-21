module.exports = function (user) {
    
    const email = user.email;
    const ip = user.ip;
    const timestamp = Date.now();

    const token = crypto.createHash('sha256').update(email + ip + timestamp).digest('hex');

    console.log('Token generated: ' + token)
    

    return {status: 200, token : token}
}