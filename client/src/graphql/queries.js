/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
      id
      walletAddress
      accessCode
      code
      timestamp
    }
  }
`;
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        walletAddress
        accessCode
        code
        timestamp
      }
      nextToken
    }
  }
`;
