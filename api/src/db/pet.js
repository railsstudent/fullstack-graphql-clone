const nanoid = require('nanoid')

const createPetModel = db => {
  return {
    findMany(filter) {
      return db.get('pet')
        .filter(filter)
        .value()
    },

    findOne(filter) {
      return db.get('pet')
        .find(filter)
        .value()
    },

    create(pet) {
      const newPet = {id: nanoid(), createdAt: Date.now(), ...pet}
      
      db.get('pet')
        .push(newPet)
        .write()

      return newPet
    },

    delete(pet) {      
      const matched = db.get('pet').filter(pet).value()
      if (matched) {
        db.get('pet')
          .remove(pet)
          .write()
      }
      return { id: pet.id }
    }
  }
}

module.exports = createPetModel
