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

const randomArrow = function() {
  let directions = Math.floor(Math.random()*4)
  let arr = ["up", "down", 'left', 'right'];
  return arr[directions];
}

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    console.log(randomArrow())
    res.end()
  } else if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    console.log("options")
    res.end()
  } else {
    res.writeHead(404, headers);
    console.log("fail")
    res.end()
  }
  // res.writeHead(200, headers);
  // res.end();
  next(); // invoke next() at the end of a request to help with testing!
};


// look at above module
// tweak a bit
// look at node
// need to fin to make the test