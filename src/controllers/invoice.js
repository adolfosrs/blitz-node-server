'use strict';

const InvoiceModule = require('../modules/Invoice.js');

function createInvoice(req, res) {
  const params = req.body;

  InvoiceModule.createInvoice(params).then(createdInvoice => {
    return res.json(createdInvoice);
  }).catch(errorMessage => res.json(errorMessage));
}

module.exports = {
  createInvoice
};
