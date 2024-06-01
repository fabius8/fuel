const Fuel = require('fuels');
const defaultConnectors = require('@fuels/connectors');
 
const fuel = new Fuel({
  connectors: defaultConnectors({ devMode: true }),
});
 
//await fuel.selectConnector('Fuel Wallet');
//await fuel.connect();