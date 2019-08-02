const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    console.log('hits here')
    console.log(req.method ,"1")
    res.end('hello from your server')
  } else if (req.method === "OPTIONS") {
    console.log(req.method, "2")
  }
  res.writeHead(200, headers);
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};


// look at above module
// tweak a bit
// look at node
// need to fin to make the test