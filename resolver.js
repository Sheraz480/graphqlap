import Material from './allMaterials/model.js';

const resolvers = {
  Query: {
    getMaterials: async () => {
      try {
        const materials = await Material.find(); 
        return materials;
      } catch (error) {
        console.error('Error fetching materials:', error);
        throw new Error('Failed to fetch materials');
      }
    },
    getMaterialById: async (_, { _id }) => {
      try {
        const material = await Material.findById(_id);
        if (!material) {
          throw new Error(`Material with ID ${_id} not found`);
        }
        return material; 
      } catch (error) {
        console.error(`Error fetching material by ID: ${error.message}`);
        throw new Error('Failed to fetch material');
      }
    },
  },
  Mutation: {
    addMaterials: async (_, { input }, context) => {
      try {
        const newMaterials = await Material.insertMany(input);
        return newMaterials;
      } catch (error) {
        console.error('Error adding materials:', error.message);
        throw new Error('Failed to add materials');
      }
    },
    updateMaterials: async (_, { input }, context) => {
      const updatedMaterials = [];
      try {
        for (const item of input) {
          const updatedMaterial = await Material.findByIdAndUpdate(item._id, item.input, {
            new: true,
            runValidators: true,
          });
          if (!updatedMaterial) {
            throw new Error(`Material with ID ${item._id} not found`);
          }
          updatedMaterials.push(updatedMaterial);
        }
        return updatedMaterials;
      } catch (error) {
        console.error('Error updating materials:', error.message);
        throw new Error('Failed to update materials');
      }
    },
    deleteMaterials: async (_, { _id }, context) => {
      const deletedMaterials = [];
      try {
        for (const id of _id) {
          const deletedMaterial = await Material.findByIdAndDelete(id);
          if (!deletedMaterial) {
            throw new Error(`Material with ID ${id} not found`);
          }
          deletedMaterials.push(deletedMaterial);
        }
        return deletedMaterials; 
      } catch (error) {
        console.error('Error deleting materials:', error.message);
        throw new Error('Failed to delete materials');
      }
    },
  },
};

export default resolvers;
