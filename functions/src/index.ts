import * as functions from 'firebase-functions';

export const addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text;
  res.json({ result: `request! query: ${original}` });
});