// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Are you a pandemic because youve got my heart on lockdown',
     from: '+13218004091',
     to: '+17785221175'
   })
  .then(message => console.log(message.sid));

 