module.exports.toQueryString = queryParams => {
  const queryFields = Object.keys(queryParams);
  const queryString = queryFields
    .map(field => {
      const value = queryParams[field];
      return `${field}=${value}`;
    })
    .join("&");

  return encodeURI(queryString);
};

module.exports.isEmpty = data => {
  return (
    (typeof data === "object" && !Object.keys(data).length) ||
    (typeof data === "string" && !data.length) ||
    (Array.isArray(data) && !data.length)
  );
};
