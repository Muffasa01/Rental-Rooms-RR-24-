import { users } from "../data/data.js"
import logger from "../middleware/logger.js"
export const userResolvers = {
    Query: {
        get_users: () => {
            logger.info("heeree")
           try {
                return {
                    success: true,
                    status: 200,
                    message: "users retrived",
                    users: users
                }
           } catch (error) {
            logger.error("get users error: couldn't retrieve users")
            return {
                success: false,
                status: 400,
                message: "ERROR: get users err "
            }
           }
        }, 
        get_user: (_, args) => {
            try {
                const {id} = args
                if(!id) {
                    logger.warn("get_user_Err: no user id provided")
                    return {
                        success: false,
                        status: 400,
                        message: "get_user_Err: no user id provided"
                    }
                }
                const user =  users.find((user) => user.id === String(id))
                if(!user) {
                    logger.warn("get_user_Err: no user found")
                    return {
                        success: false,
                        status: 400,
                        message: "get_user_Err: no user found"
                    }
                }
                return {
                    success: true,
                    status: 200,
                    message: "users retrived",
                    user: user
                }
           } catch (error) {
            logger.error("get user error: couldn't retrieve users")
            return {
                success: false,
                status: 400,
                message: "ERROR: get user err "
            }
           }
        }
    },
    Mutation: {
        create_user: (_,{input}) => {
            
            try {
                logger.info("input: ",input)
                users.push(input)
                return {
                    success: true,
                    status: 200,
                    message: "users created",
                    user: newUser
                }
            } catch (error) {
                logger.error("create user error: couldn't create users")
                return {
                    success: false,
                    status: 400,
                    message: "ERROR: create user err "
                }
            }
        }
    }
}