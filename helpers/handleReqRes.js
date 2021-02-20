const url = require('url');
const routes = require('../routes');
const notFound = require('../handlers/routeHandlers/notFoundHandler');
const { StringDecoder } = require('string_decoder');

const handleReqRes = (req, res) => {
  const parsedURL = url.parse(req.url, true);
  const trimedPath = parsedURL.path.replace(/^\/+|\/+$/g, '');
  const { query, search, slashes, port } = parsedURL;
  const headers = req.headers;
  const method = req.method;

  const queryProperties = {
    trimedPath,
    query,
    search,
    slashes,
    port,
    headers,
    method,
  };

  let postReqData = '';

  const decoder = new StringDecoder('utf-8');
  const ReqUrl = routes[trimedPath] ? routes[trimedPath] : notFound;

  ReqUrl(queryProperties, (statusCode, message) => {
    res.writeHead(statusCode);
    res.end(message);
  });

  req.on('data', (buffer) => {
    postReqData += decoder.write(buffer);
  });

  req.on('end', () => {
    console.log('see POST method Data => ', postReqData);
  });
};

module.exports = handleReqRes;
