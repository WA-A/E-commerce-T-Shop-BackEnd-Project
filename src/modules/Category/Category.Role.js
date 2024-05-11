import {Roles} from '../../MiddleWare/auth.js'


export const EndPoints = {
    Create : [Roles.Admin],
    GatAll : [Roles.Admin,Roles.User],
    GetActive : [Roles.User],
    Delete : [Roles.Admin],
}