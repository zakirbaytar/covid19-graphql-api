const CovidAPI = require("../dataSources/CovidAPI");

/**
 * @param {any} parent
 * @param {object} _args
 * @param {object} context
 * @param {object} context.dataSources
 * @param {CovidAPI} context.dataSources.covidAPI
 */
const QueryListReports = async (_source, _args, { dataSources }) => {
  return await dataSources.covidAPI.listReports();
};

module.exports = QueryListReports;
