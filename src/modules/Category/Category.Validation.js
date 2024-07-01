import joi from 'joi'

export const DeleteCategorySchema = joi.object({
    Id:joi.string().hex().length(24),
});

export const createCategorySchema = joi.object({
    Name: joi.string().min(3).required(),
    Image: joi.object({
    fieldname: joi.string().required(),
    originalname: joi.string().required(),
    encoding: joi.string().required(),
    mimetype: joi.string().valid('image/png','image/jpeg','image/webp').required(),
    destination: joi.string().required(),
    filename:joi.string().required(),
    path: joi.string().required(),
    size:joi.number().max(1000000).required()
    }).required(),
    });

    export const UpdateSchema = joi.object({
        Id:joi.string().hex().length(24),
        Name: joi.string().min(3).required(),
        Image: joi.object({
        fieldname: joi.string().required(),
        originalname: joi.string().required(),
        encoding: joi.string().required(),
        mimetype: joi.string().valid('image/png','image/jpeg','image/webp').required(),
        destination: joi.string().required(),
        filename:joi.string().required(),
        path: joi.string().required(),
        size:joi.number().max(1000000).required()
        }).optional(),
        });


