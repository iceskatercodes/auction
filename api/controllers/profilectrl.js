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

  let profileHandler = {}

  profileHandler.addUser = async (p) => {
    let r = await usermodel.getUserByEmail(p)
    if (r.user != null) {
      return { error: true, mssg: "email registered" }
    }
    let pass = await utils.generatePasswordHash(p.password)
    p.password = pass.password
    p.salt = pass.salt
    let r1 = await usermodel.addUser(p)
    return (r1)
  }

  profileHandler.getAllUsers = async()=>{
    let r = await usermodel.getAllUsers()
    return (r)
  }

  return profileHandler;
}

module.exports = configurehandler