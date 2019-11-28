
var connection = null;

var db = {
    dbConnect: function dbConnect() {

        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database:'fine_tcc'
        });
        
        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
    },

    excecuteQuery: function excecuteQuery(stringQuery) {
        return new Promise(function (resolve, reject) {
            // console.log(stringQuery)
            db.dbConnect();
            connection.query(stringQuery, function (error, results, fields) {
                if (error) reject(error);
                //console.log('The solution is: ', results);
                resolve(results);
            });
            connection.end();
        });
    }
}

module.exports = db;

