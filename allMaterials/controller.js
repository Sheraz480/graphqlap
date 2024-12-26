// import Material from './model.js';
// import validateMaterial from './validation.js';

// // Add one material
// const addMaterial = async (req, res) => {
//     const { error } = validateMaterial(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }

//     try {
//         const newMaterial = new Material(req.body);
//         await newMaterial.save();
//         return res.status(201).json({ message: 'Material added successfully', data: newMaterial });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error saving material', error: err.message });
//     }
// };

// // Add many materials
// const addManyMaterials = async (req, res) => {
//     const materials = req.body;

//     const errors = materials.map((material, index) => {
//         const { error } = validateMaterial(material);
//         return error ? { index, message: error.details[0].message } : null;
//     }).filter(Boolean);

//     if (errors.length) {
//         return res.status(400).json({ message: 'Validation errors', errors });
//     }

//     try {
//         const newMaterials = await Material.insertMany(materials);
//         return res.status(201).json({ message: 'Materials added successfully', data: newMaterials });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error saving materials', error: err.message });
//     }
// };

// // Update one material
// const updateMaterial = async (req, res) => {
//     const { id } = req.params;
//     const { error } = validateMaterial(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }

//     try {
//         const updatedMaterial = await Material.findOneAndUpdate({ id }, req.body, { new: true });
//         if (!updatedMaterial) {
//             return res.status(404).json({ message: 'Material not found' });
//         }
//         return res.status(200).json({ message: 'Material updated successfully', data: updatedMaterial });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error updating material', error: err.message });
//     }
// };

// // Update many materials
// const updateManyMaterials = async (req, res) => {
//     const materials = req.body;

//     const errors = materials.map((material, index) => {
//         const { error } = validateMaterial(material);
//         return error ? { index, message: error.details[0].message } : null;
//     }).filter(Boolean);

//     if (errors.length) {
//         return res.status(400).json({ message: 'Validation errors', errors });
//     }

//     try {
//         const bulkOps = materials.map(material => ({
//             updateOne: {
//                 filter: { id: material.id },
//                 update: material,
//                 upsert: true // Create a new document if it doesn't exist
//             }
//         }));

//         const result = await Material.bulkWrite(bulkOps);
//         return res.status(200).json({ message: 'Materials updated successfully', result });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error updating materials', error: err.message });
//     }
// };

// // Delete one material
// const deleteMaterial = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedMaterial = await Material.findOneAndDelete({ id });
//         if (!deletedMaterial) {
//             return res.status(404).json({ message: 'Material not found' });
//         }
//         return res.status(200).json({ message: 'Material deleted successfully' });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error deleting material', error: err.message });
//     }
// };

// // Delete many materials
// const deleteManyMaterials = async (req, res) => {
//     const ids = req.body.ids; // Expecting an array of ids

//     try {
//         const result = await Material.deleteMany({ id: { $in: ids } });
//         return res.status(200).json({ message: 'Materials deleted successfully', deletedCount: result.deletedCount });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error deleting materials', error: err.message });
//     }
// };

// // Read one material
// const readMaterial = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const material = await Material.findOne({ id });
//         if (!material) {
//             return res.status(404).json({ message: 'Material not found' });
//         }
//         return res.status(200).json({ data: material });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error retrieving material', error: err.message });
//     }
// };

// // Read many materials
// const readManyMaterials = async (req, res) => {
//     try {
//         const materials = await Material.find();
//         return res.status(200).json({ data: materials });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error retrieving materials', error: err.message });
//     }
// };

// export default {
//     addMaterial,
//     addManyMaterials,
//     updateMaterial,
//     updateManyMaterials,
//     deleteMaterial,
//     deleteManyMaterials,
//     readMaterial,
//     readManyMaterials,
// };
