const express = require('express');
const userRouter = express.Router();
const vendorController = require('../../controllers/vendor.userManager')
const clientController = require('../../controllers/client.userManager')

// User  routes for Clients [ /clients/* ]
userRouter.get('/clients/getAll', clientController.getAllClients);
userRouter.get('/clients/getOne/:id', clientController.getOneClient);
userRouter.post('/clients/create', clientController.createClient);
userRouter.put('/clients/update/:id', clientController.updateClient);
userRouter.delete('/clients/delete/:id', clientController.deleteClient);


// User  routes for Vendor [ /vendor/* ]
userRouter.get('/vendors/getAll', vendorController.getAllVendors);
userRouter.get('/vendors/getOne/:id', vendorController.getOneVendor);
userRouter.post('/vendors/create', vendorController.createVendor);
userRouter.put('/vendors/update/:id', vendorController.updateVendor);
userRouter.delete('/vendors/delete/:id', vendorController.deleteVendor);


module.exports= userRouter;