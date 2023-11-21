const sqllite = require('sqlite3')

const db = new sqllite.Database('./db.sqlite')


module.exports = function (req) {
    const token = req.headers['x-access-token'];
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM sessions WHERE token = ? AND ip = ?', [token, ip], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                if (rows.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    });
}