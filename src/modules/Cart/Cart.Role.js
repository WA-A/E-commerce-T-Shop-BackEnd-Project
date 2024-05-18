import {Roles} from '../../MiddleWare/auth.js'


export const EndPoints = {
    Create : [Roles.User],
    delete:[Roles.User] // can admin 
    
}