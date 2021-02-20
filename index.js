// * Dependencies
const http = require('http');

// app initialize
const app = {};

const lib = require('./lib/data');

// //*>create_data
// lib.create('test/', 'database.json', {
//   users: [
//     {name: 'sagar roy', position: 'javascript developer'},
//     {name: 'json roy', position: 'python developer'},
//     {name: 'smith', position: 'DevOps engineear'},
//   ]
// }, (error) => {
//   if (error) {
//     console.log('Erorr: ', error);
//   }
// });

// //*>read_data
// lib.read('test/', 'database.json', (error, data) => {
//   console.log("Error is ", error)
//   console.log("Data is ", JSON.parse(data).users)
// })

// //*> update data
// lib.update('test/', 'database.json', `updated`, (error, res) => {
//   console.log('error is ', error);
//   console.log('res is ', res);
// });

// //*> delete data
lib.delete('test/', 'database.json', (error) => {
  if (error) {
    console.log(error);
  }
});

const environment = require('./helpers/environments');
const handleReqRes = require('./helpers/handleReqRes');

app.createServer = () => {
  const server = http.createServer(handleReqRes);

  server.listen(environment.port, () => {
    console.log(
      'Server is Running.. view port ',
      `http://localhost:${environment.port}`
    );
    console.log('process.env.NODE_ENV is = ', process.env.NODE_ENV);
  });
};

app.createServer();
