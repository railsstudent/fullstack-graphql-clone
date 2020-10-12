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

  enum PetType { 
    DOG
    CAT
  }

  input PetInput {
    name: String,
    type: PetType,
  }

  input PetIdInput {
      id: String!
  }

  input NewPetInput {
    name: String!,
    type: PetType!,
  }

  input DeletePetInput {
    id: ID!
  }

  input UpdatePetInput {
    id: ID!,
    name: String
    type: PetType
  }

  type Query {
    user: User!,
    pets(input: PetInput): [Pet]!,
    pet(input: PetIdInput): Pet
  }

  type Mutation {
    newPet(input: NewPetInput): Pet!
    deletePet(input: DeletePetInput): Pet!
    updatePet(input: UpdatePetInput): Pet!
  }
`;

module.exports = typeDefs
