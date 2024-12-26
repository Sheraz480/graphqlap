import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
  id: { 
    type: String,
  },
  modifiedUser: {
    type: String,
    trim: true,
  },
  genericName: {
    type: String,
    trim: true,
  },
  modifiedTime: {
    type: String,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor', 
  },
  rate: {
    type: Number,
  },
  sizeFinish: {
    type: String,
    trim: true,
  },
  referenceNumber: {
    type: String,
    trim: true,
  },
  productName: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  materialName: {
    type: String,
    trim: true,
  },
  unit: {
    type: String,
    trim: true,
  },
  materialNumber: {
    type: String,
    trim: true,
  },
  brandName: {
    type: String,
    trim: true,
  },
  latestPricingDate: {
    type: String,
  },
  model: {
    type: String,
    trim: true,
  },
  addedUser: {
    type: String,
    trim: true,
  },
  addedTime: {
    type: String,
  },
}, { timestamps: true });
const Material = mongoose.model('Material', materialSchema);

export default Material;
