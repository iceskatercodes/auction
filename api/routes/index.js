'use strict';
/**
 * @author Aravind S
 * created On 7th Sep 2020
 */
const config = require('../config/appconfig');

const utils = require('../plugins/utilities')
const oneloginschema = require('../schema/onelogin_request')
let routes = (fastify, options, done) => {

    const loginctrl = require('../controllers/loginctrl')(fastify)
    const profilectrl = require('../controllers/profilectrl')(fastify)
    const projectctrl = require('../controllers/projectctrl')(fastify)


    //ping
    fastify.get('/ping', (req, reply) => {
        const msg = `Hello from app @ version ${config.app.app_version}`
        reply.send({
            'message': msg
        });
    });

    fastify.post('/login', async(req, reply) => {
        let p = req.body
        let r = await loginctrl.login(p)
        if(r.error){
            reply.code(403).send(r)
        }
        else{
            reply.send(r)
        }
    });

    fastify.post('/user',async(req,reply) =>{
        let p = req.body
        p.ipaddress = req.connection.remoteAddress
        let r= await profilectrl.addUser(p)
        if(r.error){
            reply.code(403).send(r)
        }
        else{
            reply.send(r)
        }
    })

    fastify.get('/users',{ preValidation: [fastify.authenticate]},async(req,reply) =>{ 
        if(req.user.status == 'active'){
            let r = await profilectrl.getAllUsers()
            if(r.error){
                reply.code(403).send(r)
            }
            else{
                reply.send(r)
            }
        }
        reply.code(403).send({error:true,msg:"unauthorized"})
     
    })

    fastify.get('/projects',{preValidation: [fastify.authenticate]},async(req,reply)=>{
        if(req.user.status == 'active'){
            let p = {}
            p = req.query
            let r = await projectctrl.getUserMappedProjects(p)
            if(r.error){
                reply.code(403).send(r)
            }
            else{
                reply.send(r)
            }
        }
        else{
            reply.code(403).send({error:true,msg:"unauthorized"})
        }
    })

    fastify.get('/allcontracts',{ preValidation: [fastify.authenticate]},async(req,reply) =>{ 
        if(req.user.status == 'active'){
            let p = {}
            p = req.query
            let r = await projectctrl.getProjects(p)
            if(r.error){
                reply.code(403).send(r)
            }
            else{
                reply.send(r)
            }
        }
        else{
            reply.code(403).send({error:true,msg:"unauthorized"})
        }
        
     
    })

   

    done()
}

module.exports = routes