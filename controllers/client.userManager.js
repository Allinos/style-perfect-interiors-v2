const db = require('../config/db.config')
const { errorHandler } = require('../utils/errorHandler')


exports.getAllClients = (req, res) => {
    let query = 'SELECT * FROM clients;';
    db.query(query, (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Retrived', data: results })
        } else {
            console.log("Error inside file client.usermanager : 10" + err);
            new errorHandler(501, "Error inside file client.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.getOneClient = (req, res) => {
    let query = 'SELECT name, contact, contact2, email, location, oth_details FROM clients WHERE id=?';
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Retrived', data: results })
        } else {
            new errorHandler(501, "Error inside file client.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.createClient = (req, res) => {
    let data = req.body;
    let query = 'INSERT INTO clients(name, contact, contact2, email, location, oth_details) VALUES(?,?,?,?,?,?);';
    db.query(query, [data.name,data.contact,data.alt_contact,data.email,data.location,data.details], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Crated', data: results.insertedId })
        } else {
            console.log("Error inside file client.usermanager:ln:35-" + err);
            new errorHandler(501, "Error inside file client.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.updateClient = (req, res) => {
    let data = req.body;
    let query = 'UPDATE clients SET name=?, contact=?, contact2=?, email=?, location=?, oth_details=? WHERE id=?;';
    db.query(query, [data.name,data.contact,data.contact2,data.email,data.location,data.details,req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Updated', data: results })
        } else {
            console.log("Error inside file client.usermanager:ln:43-" + err);
            new errorHandler(501, "Error inside file client.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.deleteClient = (req, res) => {
    let query = 'DELETE FROM clients WHERE id=?';
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Deleted', data: results })
        } else {
            new errorHandler(501, "Error inside file client.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}