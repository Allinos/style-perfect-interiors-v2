const db = require('../config/db.config')
const { errorHandler } = require('../utils/errorHandler')


// /***** Supply CRUD */
exports.getOneSupply = (req, res) => {
    let query = 'SELECT * FROM vendor_supplies WHERE id=?';
    db.query(query,[req,params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Retrived', data: results })
        } else {
            console.log("Error inside file Supply.usermanager : 10" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.addSupply = (req, res) => {
    let e = req.body;
    let query = 'INSERT INTO vendor_supplies(vendor_id,item_name,details,sgst,cgst,total_amount,date) VALUES(?,?,?,?,?,?,?,?,?,?,?);';
    db.query(query, [e.vendor_id,e.name,e.details,e.sgst,e.cgst,e.total_amount,e.date], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Crated', data: results.insertedId })
        } else {
            console.log("Error inside file Supply.usermanager:ln:35-" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.updateSupply = (req, res) => {
    let e = req.body;
    let query = 'UPDATE vendor_supplies SET item_name=?,details=?,sgst=?,cgst=?,total_amount=?,date=? WHERE id=?;';
    db.query(query, [e.name, e.details, e.sgst, e.cgst,e.total_amount,e.date, req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Updated', data: results })
        } else {
            console.log("Error inside file Supply.usermanager:ln:43-" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.deleteSupply = (req, res) => {
    let query = 'DELETE FROM vendor_supplies WHERE id=?;';
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Deleted', data: results })
        } else {
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}


// /***** Payments CRUD */
exports.getOnePayment = (req, res) => {
    let query = 'SELECT * FROM vendor_payments WHERE id=?;';
    db.query(query,[req.params.id],(err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Retrived', data: results })
        } else {
            console.log("Error inside file Supply.usermanager : 61" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 61" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.getAllPaymentByID=(req, res) => {
    let query = 'SELECT * FROM vendor_payments WHERE vendor_supply_id=?;';
    db.query(query,[req.params.id],(err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully data Retrived', data: results })
        } else {
            console.log("Error inside file Supply.usermanager : 75" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 75" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}

exports.addPayment = (req, res) => {
    let e = req.body;
    let query = 'INSERT INTO vendor_payments(vendor_supply_id,title,amount,dateofpay,modeofpay) VALUES(?,?,?,?,?);';
    db.query(query, [e.supply_id, e.title, e.amount, e.date, e.mode], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Crated', data: results.insertedId })
        } else {
            console.log("Error inside file Supply.usermanager:ln:35-" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 35" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.updatePayment = (req, res) => {
    let e = req.body;
    let query = 'UPDATE vendor_payments SET title=?,amount=?,dateofpay=?,modeofpay=? WHERE id=?;';
    db.query(query, [e.title, e.amount, e.date, e.mode,req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Updated', data: results })
        } else {
            console.log("Error inside file Supply.usermanager:ln:43-" + err);
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.deletePayment = (req, res) => {
    let query = 'DELETE FROM vendor_payments WHERE id=?';
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully e Deleted', data: results })
        } else {
            new errorHandler(501, "Error inside file Supply.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}