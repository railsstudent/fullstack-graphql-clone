/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your schema
 */

module.exports = {
  Query: {
    user(_, __, ctx) {
      return ctx.models.User.findOne()
    },
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input)
    },
    deletePet(_, { input}, ctx) {
      return ctx.models.Pet.delete(input)
    },
    updatePet(_, { input }, ctx) {
      return ctx.models.Pet.update(input)
    }    
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    },
    owner(_, __, ctx) {
      return ctx.models.User.findOne()
    }
  },
  User: {
    pets(_, __, ctx) {
      return ctx.models.Pet.findMany()
    }
  }
}
