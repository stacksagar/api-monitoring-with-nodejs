const fs = require('fs');
const path = require('path');

// app initialize
const lib = {};

// base directory of the data 📁
lib.basedir = path.join(__dirname, '/../.data/');

// ** Here is My ( CRUD - API)

lib.create = (dir, file, data, callback) => {
  fs.open(lib.basedir + dir + file, 'w', (error, fileDes) => {
    if (fileDes) {
      const stringData = JSON.stringify(data);
      fs.writeFile(fileDes, stringData, (error2) => {
        if (!error2) {
          fs.close(fileDes, (error3) => {
            if (!error3) {
              callback(false);
            } else {
              callback('Error3: ', error3);
            }
          });
        } else {
          callback('Error2: ', error2);
        }
      });
    } else {
      callback('Error: ', error);
    }
  });
};

lib.read = (dir, filename, callback) => {
  fs.readFile(lib.basedir + dir + filename, 'utf8', (error, data) => {
    callback(error, data);
  });
};

lib.update = (dir, file, data, callback) => {
  fs.open(lib.basedir + dir + file, 'r+', (error, fileDes) => {
    if (fileDes && !error) {
      fs.ftruncate(fileDes, (error2) => {
        if (!error2) {
          const stringData = JSON.stringify(data);
          fs.writeFile(fileDes, stringData, (error3) => {
            if (!error3) {
              fs.close(fileDes, (error4) => {
                if (error4) {
                  callback('Error3: ', error4);
                }
              });
            } else {
              callback('Error3: ', error3);
            }
          });
        } else {
          callback('Error2: ', error2);
        }
      });
    } else {
      callback('Error: ', error);
    }
  });
};

lib.delete = (dir, file, callback) => {
  fs.unlink(lib.basedir + dir + file, (error) => {
    if (error) {
      callback(error);
    }
  });
};

module.exports = lib;