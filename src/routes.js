'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const InvoiceController = require('./controllers/invoice.js');

router.use(bodyParser.json());
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('X-Frame-Options', 'DENY');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Vary', 'Accept-Encoding');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

router.post('/createInvoice', InvoiceController.createInvoice);

module.exports = router;
