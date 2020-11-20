import { gql } from "apollo-server-express";

//using es6 feature here called tagged template literals
//gql is a tag or function where template literal arguement is applied next to it
export const typeDefs = gql`
  type User {
    id: ID!
    previewURL: String
    name: String!
    avatar: String!
    contact: String!
  }

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  input LogInInput {
    code: String!
  }

  type Query {
    authUrl: String!
    user(id: ID!): User!
  }

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
  }
`;
