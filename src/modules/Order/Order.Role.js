import {Roles} from '../../MiddleWare/auth.js'


export const EndPoints = {
    Create : [Roles.User],
    all : [Roles.Admin],
    UserOrder:[Roles.User],
    changestatus:[Roles.Admin],
}