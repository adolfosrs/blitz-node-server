const fs = require('fs');
const grpc = require('grpc');
const lnrpc = grpc.load('rpc.proto').lnrpc;
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'
const lndCert = fs.readFileSync('/home/bitcoin/.lnd/tls.cert');
const sslCreds = grpc.credentials.createSsl(lndCert);
const macaroonCreds = grpc.credentials.createFromMetadataGenerator((args, callback) => {
  const macaroon = fs.readFileSync('/home/bitcoin/.lnd/data/chain/bitcoin/mainnet/admin.macaroon').toString('hex');
  const metadata = new grpc.Metadata()
  metadata.add('macaroon', macaroon);
  callback(null, metadata);
});
const creds = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
const lightning = new lnrpc.Lightning('localhost:10009', creds);

module.exports = {
  lightning
};
