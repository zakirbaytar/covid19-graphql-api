const CovidAPI = require("./CovidAPI");

module.exports.dataSources = () => {
  return {
    covidAPI: new CovidAPI()
  };
};
