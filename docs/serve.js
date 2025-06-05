var liveServer = require('live-server');
var params = {
  port: 8181,
  root: './',
  host: 'localhost',
  open: true,
  wait: 1000,

  logLevel: 2,
};
liveServer.start(params);
