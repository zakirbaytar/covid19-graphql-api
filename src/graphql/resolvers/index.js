const QueryGetReport = require("./Query.getReport");
const QueryListReports = require("./Query.listReports");

module.exports.resolvers = {
  Query: {
    getReport: QueryGetReport,
    listReports: QueryListReports
  }
};
