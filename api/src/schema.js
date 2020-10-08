const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!,
      username: String!
  }

  type Pet {
    id: ID!,
    createdAt: String!,
    name: String!,
    type: String!,
    img: String!
  }

  input PetInput {
    name: String,
    type: String,
  }

  input PetIdInput {
      id: String!
  }

  type Query {
    user: User!,
    pets(input: PetInput): [Pet]!,
    pet(input: PetIdInput): Pet
  }
`;

module.exports = typeDefs
