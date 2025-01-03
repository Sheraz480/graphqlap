import Joi from 'joi'
const validateMaterial = (data) => {
    const schema = Joi.object({
        id: Joi.string().trim().optional(), // Optional if generated by MongoDB or handled separately
        modifiedUser: Joi.string().trim().required(), // Mark required fields
        genericName: Joi.string().trim().required(),
        modifiedTime: Joi.date().iso().required(), // Use Joi.date() for date fields
        vendors: Joi.string().trim().optional(),
        rate: Joi.number().required(),
        sizeFinish: Joi.string().trim().required(),
        referenceNumber: Joi.string().trim().optional(),
        productName: Joi.string().trim().required(),
        image: Joi.string().uri().optional(), // Add URL validation if required
        materialName: Joi.string().trim().required(),
        unit: Joi.string().trim().required(),
        materialNumber: Joi.string().trim().optional(),
        brandName: Joi.string().trim().required(),
        latestPricingDate: Joi.date().iso().required(),
        model: Joi.string().trim().optional(),
        addedUser: Joi.string().trim().optional(),
        addedTime: Joi.date().iso().optional(),
    });

    return schema.validate(data);
};
export default validateMaterial