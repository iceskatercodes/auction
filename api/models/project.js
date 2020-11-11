'use strict';
/**
 * @author Aravind S
 */
function configuremodel(fastify) {
    let model = {}
    const knex = fastify.knex;   
    const utils = fastify.hmutils

    model.getProjects =async(p)=>{
        let resp = {
            error: false
        }
        try {
            const r = await knex('chad.ilance_projects').where(p).select()
            if(r.length>0){
                resp.msg ='projects list'
                resp.projects = r
            }
            else{
                resp.error = true
                resp.msg = 'projects not found'
            }
        } catch (e) {
            resp.error = true
            resp.data = e;
        }
        return resp;
    } 

    model.getUserProjectsData = async (p) =>{
        let resp = {
            error: false
        }
        try {
            const r = await knex('chad.ilance_projects as p')
            .join('chad.ilance_users as u','u.user_id','p.user_id')
            .leftJoin('chad.ilance_categories as c','c.cid','p.cid')
            .orderBy('c.category','asc')
            .orderBy('u.username','asc')
            .orderBy('p.project_title','asc')
            .orderBy('p.date_added','desc')
            .limit(parseInt(p.limit))
            .offset(parseInt(p.skip))
            .select()
            if(r.length>0){
                resp.msg ='projects list'
                resp.projects = r
            }
            else{
                resp.error = true
                resp.msg = 'projects not found'
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