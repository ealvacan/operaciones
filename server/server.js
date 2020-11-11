const http = require('http');
const index = require('../index');
const config = require('../config/global.config');

const port = parseInt(process.env.port,10) || config.port;
index.set('port', port);

const server = http.createServer(index);
server.listen(port);
server.setTimeout(config.timeout);