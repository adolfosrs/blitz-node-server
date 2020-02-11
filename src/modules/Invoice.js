'use strict';

const LightningProvider = require('./LightningProvider.js');
const lightning = LightningProvider.lightning;

function createInvoice(params) {
  return new Promise((resolve, reject) => {
    const request = {
      memo: 'tetet',
      // r_preimage: < bytes > ,
      // r_hash: < bytes > ,
      value: params.amt,
      // value_msat: < int64 > ,
      // settled: < bool > ,
      // creation_date: < int64 > ,
      // settle_date: < int64 > ,
      // payment_request: < string > ,
      // description_hash: < bytes > ,
      // expiry: < int64 > ,
      // fallback_addr: < string > ,
      // cltv_expiry: < uint64 > ,
      // route_hints: < array RouteHint > ,
      // state: < InvoiceState > ,
      // htlcs: < array InvoiceHTLC > ,
      // features: < array FeaturesEntry > ,
    };

    lightning.addInvoice(request, (err, response) => {
      console.log('addInvoice', response, err);
      return resolve(response.payment_request);
    });
  });
}

module.exports = {
  createInvoice
};
