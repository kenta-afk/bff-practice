import { gql } from 'graphql-tag';

export const greeterTypeDefs = gql`
  type Query {
    greeting(name: String): String
  }
`;