/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
      id
      walletAddress
      accessCode
      code
      timestamp
    }
  }
`;
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
      id
      walletAddress
      accessCode
      code
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
      id
      walletAddress
      accessCode
      code
      timestamp
      createdAt
      updatedAt
    }
  }
`;
