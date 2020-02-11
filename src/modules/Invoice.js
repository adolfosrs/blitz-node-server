'use strict';

const LightningProvider = require('./LightningProvider.js');
const lightning = LightningProvider.lightning;

function createInvoice(params) {
  return new Promise((resolve, reject) => {
    const request = {
      memo: params.memo,
      value: params.amt,
      // r_preimage: <bytes>,
      // r_hash: <bytes>,
      // value_msat: <int64>,
      // settled: <bool>,
      // creation_date: <int64>,
      // settle_date: <int64>,
      // payment_request: <string>,
      // description_hash: <bytes>,
      // expiry: <int64>,
      // fallback_addr: <string>,
      // cltv_expiry: <uint64>,
      // route_hints: <array RouteHint>,
      // private: <bool>,
      // add_index: <uint64>,
      // settle_index: <uint64>,
      // amt_paid: <int64>,
      // amt_paid_sat: <int64>,
      // amt_paid_msat: <int64>,
      // state: <InvoiceState>,
      // htlcs: <array InvoiceHTLC>,
      // features: <array FeaturesEntry>,
      // is_keysend: <bool>,
    };

    lightning.addInvoice(request, (err, response) => {
      console.log('addInvoice', response, err);
      return resolve(response);
    });
  });
}

module.exports = {
  createInvoice
};
