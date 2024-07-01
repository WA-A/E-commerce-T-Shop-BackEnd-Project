import joi from 'joi'

export const DeleteCategorySchema = joi.object({
    Id:joi.string().hex().length(24),
});