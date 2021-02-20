const environments = {};

environments.staging = {
  port: 4040
};

environments.production = {
  port: 8080
};
 
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;