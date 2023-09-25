var express = require('express')
    , bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql2');
const { del } = require('express/lib/application');
const port = 5000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data'
});

var app = express()
app.use(cors())
app.use(bodyParser.json())


app.get('/members', function (req, res, next) {
    connection.query(
        'SELECT * FROM `member`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.post('/members', function (req, res, next) {
    connection.query(
        'INSERT INTO `member`(`m_email`, `m_password`, `m_name`) VALUES (?, ?, ?)',
        [req.body.m_email, req.body.m_password, req.body.m_name],
        function (err, results, fields) {
            id = results.insertId;
            if (err == null) {
                text = "Created " + id
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})

app.get('/members/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `member` WHERE `m_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})

app.put('/members/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'UPDATE `member` SET `m_email`= ?,`m_password`= ?,`m_name`= ? WHERE `m_id` = ?',
        [req.body.m_email, req.body.m_password, req.body.m_name, id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})

app.delete('/members/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'DELETE FROM `member` WHERE m_id = ?',
        [id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})

app.get('/courses', function (req, res, next) {
    connection.query(
        'SELECT * FROM `course`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.post('/courses', function (req, res, next) {
    connection.query(
        'INSERT INTO `course`(`c_name`, `c_description`, `c_price`) VALUES (?, ?, ?)',
        [req.body.c_name, req.body.c_description, req.body.c_price],
        function (err, results, fields) {
            id = results.insertId;
            if (err == null) {
                text = "Created " + id
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})

app.get('/courses/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `course` WHERE `c_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})

app.put('/courses/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'UPDATE `course` SET `c_name` = ?, `c_description` = ?, `c_price` = ? WHERE `c_id` = ?',
        [req.body.c_name, req.body.c_description, req.body.c_price, id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})

app.delete('/courses/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'DELETE FROM `course` WHERE c_id = ?',
        [id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})


app.get('/enrolls', function (req, res, next) {
    connection.query(
        'SELECT * FROM `enroll`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.post('/enrolls', function (req, res, next) {
    connection.query(
        'INSERT INTO `enroll`(`m_id`, `c_id`, `cer_start`, `cer_expire`) VALUES (?, ?, ?, ?)',
        [req.body.m_id, req.body.c_id, req.body.cer_start, req.body.cer_expire],
        function (err, results, fields) {
            if (err == null) {
                text = "Created " + results.insertId
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})

app.get('/enrolls/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `cer_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})

app.put('/enrolls/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'UPDATE `enroll` SET `m_id`= ?,`c_id`= ?,`cer_start`=? ,`cer_expire`=? WHERE `cer_id` = ?;',
        [req.body.m_id, req.body.c_id, req.body.cer_start, req.body.cer_expire, id],
        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})

app.delete('/enrolls/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'DELETE FROM `enroll` WHERE cer_id = ?',
        [id],

        function (err, results, fields){
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})

app.get('/enrolls/member/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `m_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})

app.get('/enrolls/course/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `c_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})


app.listen(port, function () {
    console.log('CORS-enabled Web Server listening on port', port)
})

