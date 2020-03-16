const { RESTDataSource } = require("apollo-datasource-rest");
const { toQueryString } = require("../../utils");

class CovidAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      "https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1";

    this.defaultQuery = {
      f: "json",
      returnGeometry: false,
      spatialRel: "esriSpatialRelIntersects",
      outFields: "*",
      orderByFields: [
        ["Confirmed", "desc"],
        ["Country_Region", "asc"],
        ["Province_State", "asc"]
      ]
        .map(field => field.join(" "))
        .join(", "),
      outSR: 102100,
      resultOffset: 0,
      resultRecordCount: 300,
      cacheHint: false,
      where: "Confirmed>0"
    };
  }

  willSendRequest(request) {
    request.headers.set("Origin", "https://gisanddata.maps.arcgis.com");
    request.headers.set(
      "Referer",
      "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html"
    );
  }

  async getJSON(path, params, init) {
    const response = await this.get(path, params, init);
    const jsonResponse = JSON.parse(response);

    if (!jsonResponse.features) {
      throw new Error("Error occured getting data from server!");
    }
    return jsonResponse.features.map(({ attributes }) =>
      this.serialize(attributes)
    );
  }

  async getReport(id) {
    const query = {
      ...this.defaultQuery,
      where: `${this.defaultQuery.where} AND OBJECTID = ${id}`
    };

    const [report] = await this.getJSON(`/query?${toQueryString(query)}`);
    return report;
  }

  async listReports() {
    return await this.getJSON(`/query?${toQueryString(this.defaultQuery)}`);
  }

  serialize(report) {
    return {
      place: {
        id: report.OBJECTID,
        state: report.Province_State,
        region: report.Country_Region,
        latitude: report.Lat,
        longitude: report.Long_
      },
      lastUpdate: new Date(report.Last_Update).toISOString(),
      confirmed: report.Confirmed,
      recovered: report.Recovered,
      deaths: report.Deaths,
      active: report.Active
    };
  }
}

module.exports = CovidAPI;
