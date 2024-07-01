import joi from 'joi';


export const RegisterSchema = joi.object({
    UserName: joi.string().alphanum().min(3).max(30).required(),
    Password: joi.string().pattern(/^[A-Z][a-z0-9]{3,20}$/),
    Email: joi.string().email().required(),
    //ConfirmPassword:joi.valid(joi.ref('Password')).required(),
});


export const LoginSchema = joi.object({
    Password: joi.string().pattern(/^[A-Z][a-z0-9]{3,20}$/),
    Email: joi.string().email().required(),
});

export const SendCodeSchema = joi.object({
    Email: joi.string().email().required(),
});

export const ForgetPasswordSchema = joi.object({
    Password: joi.string().pattern(/^[A-Z][a-z0-9]{3,20}$/),
    Email: joi.string().email().required(),
    code:joi.string().length(4),
});