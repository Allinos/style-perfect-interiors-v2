const db = require('../config/db.config')
const { errorHandler } = require('../utils/errorHandler')


exports.getAllVendors = (req, res) => {
    let query = 'SELECT * FROM vendors;';
    db.query(query, (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Retrived', data: results })
        } else {
            console.log("Error inside file Vendor.usermanager : 10" + err);
            new errorHandler(501, "Error inside file Vendor.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.getOneVendor = (req, res) => {
    let query = `SELECT id as reference_no, name, contact, contact2, email, location as city, oth_details FROM vendors WHERE id=2;
    SELECT id, vendor_id, item_name, details,sgst, cgst, total_amount, modeofpay, date, gst_status FROM vendor_supplies WHERE  vendor_id=2;
    SELECT vendor_payments.id, title, dateofpay, vendor_payments.modeofpay , vendor_payments.amount FROM vendor_supplies RIGHT JOIN vendor_payments on vendor_payments.vendor_supply_id=vendor_supplies.id WHERE  vendor_id=2s;`
   
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Retrived', data: results })
        } else {
            new errorHandler(501, "Error inside file Vendor.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.createVendor = (req, res) => {
    let data = req.body;
    let query = 'INSERT INTO vendors(name, contact, contact2, email, location, oth_details) VALUES(?,?,?,?,?,?);';
    db.query(query, [data.name,data.contact,data.contact2,data.email,data.location,data.details], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Crated', data: results.insertedId })
        } else {
            console.log("Error inside file Vendor.usermanager:ln:35-" + err);
            new errorHandler(501, "Error inside file Vendor.usermanager : 10" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.updateVendor = (req, res) => {
    let data = req.body;
    let query = 'UPDATE vendors SET name=?, contact=?, contact2=?, email=?, location=?, oth_details=? WHERE id=?;';
    db.query(query, [data.name,data.contact,data.contact2,data.email,data.location,data.details,req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Updated', data: results })
        } else {
            console.log("Error inside file Vendor.usermanager:ln:43-" + err);
            new errorHandler(501, "Error inside file Vendor.usermanager : 49" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}
exports.deleteVendor = (req, res) => {
    let query = 'DELETE FROM vendors WHERE id=?';
    db.query(query, [req.params.id], (err, results) => {
        if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully Data Deleted', data: results })
        } else {
            new errorHandler(501, "Error inside file Vendor.usermanager : 60" + err)
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
        }
    })
}