const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  type Place {
    id: ID!
    state: String
    region: String!
    latitude: Float!
    longitude: Float!
  }

  type Report {
    place: Place!
    confirmed: Int!
    recovered: Int!
    deaths: Int!
    active: Int!
    lastUpdate: String
  }

  type Query {
    getReport(id: ID!): Report!
    listReports: [Report!]!
  }
`;
