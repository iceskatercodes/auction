'use strict';
/**
 * @author Aravind S
 * created On 7th Sep 2020
 */
function configurehandler(fastify) {
    const utils = fastify.hmutils
    const s3 = fastify.s3
    const usermodel = require('../models/user')(fastify)
    const ErrorMsg = (msg) => {
        return {
            error: true,
            msg: msg
        }
    }

    let handler = {}
    //creates auth
    handler.createToken = async (p) => {
        const token = await fastify.jwt.sign(p, {
            expiresIn: '1d' //900
        })
        return token;
    }

    //decrypts auth
    handler.decodeToken = async (tkn) => {
        const d = await fastify.jwt.decode(tkn)
        return d
    }

    handler.login = async(p) => {
        let r = await usermodel.getUserByEmail(p)
        console.log("r>>>>",r);
        if(r.user == null){
            return{error:true,msg:"user Does not exist"}
        }
        let pass = utils.comparePasswordHash(p.password,r.user.password,r.user.salt)
        if(!pass){
            return{error:true,msg:"Incorrect password"}
        }
        let auth = await handler.createToken(r.user)
        return {error:false,tkn:auth,"user":r.user}
    }


    return handler
}
module.exports = configurehandler