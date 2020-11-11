'use strict';
/**
 * @author Aravind S
 * created On 7th Sep 2020
 */
function configuremodel(fastify) {
    let model = {}
    const knex = fastify.knex;   
    const utils = fastify.hmutils

    


    //p => email_phone
    model.getUserByEmail = async (p) => {
        let resp = {
            error: false
        }
        try {
            const r = await knex('chad.ilance_users').where('email', p.email).orWhere('username',p.email).select()
            if (r.length > 0)
                resp.user = r[0];
            else
                resp.user = null
        } catch (e) {
            resp.error = true
            resp.data = e;
        }
        return resp;
    }

    model.addUser = async(p) =>{
        let resp = {
            error: false
        }
        try {
            const r = await knex('chad.ilance_users').insert(p).returning('user_id')
            if(r){
                resp.msg ='user added'
            }
            else{
                resp.error = true
                resp.msg = 'user Not added'
            }
        } catch (e) {
            resp.error = true
            resp.data = e;
        }
        return resp;
    }

    model.getAllUsers = async(p) =>{
        let resp = {
            error: false
        }
        try {
            const r = await knex('chad.ilance_users').select()
            if(r.length>0){
                resp.msg ='uses list'
                resp.users = r
            }
            else{
                resp.error = true
                resp.msg = 'user not found'
            }
        } catch (e) {
            resp.error = true
            resp.data = e;
        }
        return resp;
    }

   

    return model
}

module.exports = configuremodel