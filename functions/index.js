const functions = require('firebase-functions');
const app = require('../server');
exports.design = functions.https.onRequest(app);
