'use strict';
/**
 * @author Aravind S
 */
function configurehandler(fastify) {
    const utils = fastify.hmutils
    const s3 = fastify.s3
    const projectModel = require('../models/project')(fastify)
    const ErrorMsg = (msg) => {
        return {
            error: true,
            msg: msg
        }
    }

    let handler = {}
    
    handler.getProjects = async(p)=>{
        let r = await projectModel.getProjects(p)
        return r
    }

    handler.getUserMappedProjects = async(p) =>{
        let r = await projectModel.getUserProjectsData(p)
        return r
    }


    return handler
}
module.exports = configurehandler