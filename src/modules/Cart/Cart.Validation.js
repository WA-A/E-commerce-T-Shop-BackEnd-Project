import joi from 'joi'

export const CreateCartSchema = joi.object({
    ProductId:joi.string().hex().length(24),
});