import {Roles} from '../../MiddleWare/auth.js'


export const EndPoints = {
    GatUsers : [Roles.Admin],
    UserData : [Roles.Admin , Roles.User],
}