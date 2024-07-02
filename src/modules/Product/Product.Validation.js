import joi from 'joi'



export const createProductSchema = joi.object({
    Name: joi.string().min(3).required(),
    Discription:joi.string().required(),
    Stock:joi.number().min(0).required(),
    Price:joi.number().min(1).required(),
    Discount:joi.number().min(0).required(),
    Image: joi.array().items(
        joi.object({
            fieldname: joi.string().required(),
            originalname: joi.string().required(),
            encoding: joi.string().required(),
            mimetype: joi.string().valid('image/png','image/jpeg','image/webp').required(),
            destination: joi.string().required(),
            filename:joi.string().required(),
            path: joi.string().required(),
            size:joi.number().max(1000000).required()
            })).required(),

            SubImage: joi.array().items(
                joi.object({
                    fieldname: joi.string().required(),
                    originalname: joi.string().required(),
                    encoding: joi.string().required(),
                    mimetype: joi.string().valid('image/png','image/jpeg','image/webp').required(),
                    destination: joi.string().required(),
                    filename:joi.string().required(),
                    path: joi.string().required(),
                    size:joi.number().max(1000000).required()
                    })).optional().max(5),
    });