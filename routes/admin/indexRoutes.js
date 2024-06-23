const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/_index.controller')

// ----index pages-----
//---normal project ejs routes-----
router.get('/dashboard', mainController.indexDeshboard)
router.get('/user-manager', mainController.userManager)
router.get('/user-manager/clients_vendors', mainController.clients_vendors)
router.get('/settings', mainController.settings)
router.get('/finance', mainController.renderNormalProjectFinance )
router.get('/finance/expenses', mainController.expense )
router.get('/np-form', mainController.renderNormalProjectForm)
router.get('/inventory', mainController.inventory)
router.get('/inventory/vendor_supplies', mainController.vendor_supplies)
router.get('/inventory/supply_payments', mainController.supply_payments)
router.get('/stock', mainController.stock)
router.post('/projects-create', mainController.insertNewNormalDeal );



module.exports = router;