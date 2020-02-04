'use strict';

const InvoiceModule = require('../modules/invoice.js');

function createInvoice(req, res) {
  const body = req.body;
  const message = body.message;
  const author = body.author;
  const link = body.link;
  const uid = body.uid;
  const amt = body.amt;

  console.log('createInvoice', body);

  if (!message || !uid) {
    return res.json('Missing parameters');
  }

  InvoiceModule.createInvoice(uid, amt, message, author, link).then(invoice => {
    return res.json({
      pay_req: invoice.pay_req
    });
  }).catch(errorMessage => res.json(errorMessage));
}

module.exports = {
  createInvoice,
  withdraw
};
