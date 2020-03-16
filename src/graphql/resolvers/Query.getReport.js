const CovidAPI = require("../dataSources/CovidAPI");

/**
 * @param {any} parent
 * @param {object} args
 * @param {object} args.id
 * @param {object} context
 * @param {object} context.dataSources
 * @param {CovidAPI} context.dataSources.covidAPI
 */
const QueryGetReport = async (_source, { id }, { dataSources }) => {
  return await dataSources.covidAPI.getReport(id);
};

module.exports = QueryGetReport;
