var request = require('request');
 
var options = {
  url: 'http://www.yidm.com/open/reg.php'
};
 

function callback(error, response, body) {
    console.log(body)
}

let i = 0
while (true) {
    if (i === 111111) return
    request(options, callback);
}