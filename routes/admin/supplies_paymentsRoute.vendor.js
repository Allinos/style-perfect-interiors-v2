const express = require('express');
const vendorRouter = express.Router();
const vendorController = require('../../controllers/supplies_payments.vendor.js')

//  routes for Supply [ /vendor/* ]
// vendorRouter.get('/getAll', vendorController.getAll);
vendorRouter.get('/getOne-supply/:id', vendorController.getOneSupply);
vendorRouter.post('/add-supply', vendorController.addSupply);
vendorRouter.put('/update-supply/:id', vendorController.updateSupply);
vendorRouter.delete('/delete-supply/:id', vendorController.deleteSupply);


//  routes for Vendor Payments [ /vendor/* ]
// vendorRouter.get('/getAll', vendorController.getAll);
vendorRouter.get('/getOne-payment/:id', vendorController.getOnePayment);
vendorRouter.get('/getAllpayment/:id', vendorController.getAllPaymentByID);
vendorRouter.post('/add-payment', vendorController.addPayment);
vendorRouter.put('/update-payment/:id', vendorController.updatePayment);
vendorRouter.delete('/delete-payment/:id', vendorController.deletePayment);


module.exports= vendorRouter;