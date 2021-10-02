const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.json({ hello: request.body.name });
});

exports.helloWorldCallabe = functions.https.onCall(function (data, ctx) {
  throw functions.https.HttpsError("invalid-argument");
  return { id: data.name };
});
