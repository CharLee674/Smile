// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
function sendText(){
const accountSid = 'insert_value_here';
const authToken = 'insert_token_here';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is an automated message sent using awesome programming skills by Michelle',
     from: '+13044622652',
     to: '+17777777777'
   })
  .then(message => console.log(message.sid));
}