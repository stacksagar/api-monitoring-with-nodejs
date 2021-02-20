const notFound = (queryProperties, callback) => {
  console.log('From not found! ', queryProperties);
  callback(404, 'Not Found');
};

module.exports = notFound;
