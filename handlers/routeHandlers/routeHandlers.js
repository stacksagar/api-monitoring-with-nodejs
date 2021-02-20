const handlers = {};

handlers.about = (queryProperties, callback) => {
  console.log(queryProperties)
  callback(200, 'About page is display')
};
handlers.contact = (queryProperties, callback) => {
  console.log(queryProperties)
  callback(200, 'Contact page is display')
};
handlers.blog = (queryProperties, callback) => {
  console.log(queryProperties)
  callback(200, 'Blog page is display')
};

module.exports = handlers