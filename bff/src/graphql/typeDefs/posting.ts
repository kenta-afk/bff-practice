import { gql } from 'graphql-tag';

export const postingTypeDefs = gql`
  type Query {
    posting(
    title: String, 
    message: String
    ): String
  }
`;