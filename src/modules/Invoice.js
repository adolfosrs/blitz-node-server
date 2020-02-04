'use strict';

const fs = require('fs');
const grpc = require('grpc');
const lnrpc = grpc.load('rpc.proto').lnrpc;
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'
const lndCert = fs.readFileSync('~/.lnd/tls.cert');
const sslCreds = grpc.credentials.createSsl(lndCert);
const macaroonCreds = grpc.credentials.createFromMetadataGenerator((args, callback) => {
  const macaroon = fs.readFileSync('~/.lnd/data/chain/bitcoin/simnet/admin.macaroon').toString('hex');
  const metadata = new grpc.Metadata()
  metadata.add('macaroon', macaroon);
  callback(null, metadata);
});
const creds = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
const lightning = new lnrpc.Lightning('localhost:10009', creds);


function createInvoice(params) {
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
  });
}
module.exports = {
  createInvoice
};
