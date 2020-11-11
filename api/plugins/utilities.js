'use strict'

/**
 * @createdBy Aravind
 * @createdOn 7th Sep 2020
 */

const bcrypt = require("bcrypt");
var simplecrypto = require('simple-crypto-js').default
const shortid = require('shortid');
const crypto = require('crypto')
const salt = 12;

let utils = {};

const genRandomString = (length) => {
  if (!length)
      length = 15

  return crypto.randomBytes(Math.ceil(length / 2))
      .toString('hex') /** convert to hexadecimal format */
      .slice(0, length);
}
utils.randomString =(length, chars)=> {
  var mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~!@#$%^&*()_+-={}[]:<>?/\\';
  var result = '';
  for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
  return result;
}
/**
* hash password with sha512.
* @param {string} password - List of required fields.
* @param {string} salt - Data to be validated.
*/
var sha512 = (password, salt) => {
  if (!password)
      password = ''

  if (!salt)
      salt = ''

  const hash = crypto.createHmac('sha256', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  return hash.digest('hex');
}

/**
* To generate password hash.
* @param {string} plainTextPassword
* @param {string} salt - Optional. If it not it will create one
*/
utils.generatePasswordHash = async (plainTextPassword, salt) => {
  return new Promise(async (resolve, reject) => {
      if (!salt)
          salt = genRandomString(5)
      const pwdHash = sha512(plainTextPassword, salt)
      resolve({ salt: salt, password: pwdHash })
  })
}

utils.comparePasswordHash = (plainPassword, passwordHash, salt) => {
  const compareHash = sha512(plainPassword, salt)
  return passwordHash === compareHash
}

utils.encrypt = (data) => {
  try {
      let cipher = crypto.createCipher('aes-256-cbc', ENCRYPTION_KEY)
      let crypted = cipher.update(data, 'utf-8', 'hex')
      crypted += cipher.final('hex')
      return crypted
  } catch (e) {
      console.log(e)
      return null;
  }
}

utils.decrypt = (data) => {
  try {
      let decipher = crypto.createDecipher('aes-256-cbc', ENCRYPTION_KEY)
      let decrypted = decipher.update(data, 'hex', 'utf-8')
      decrypted += decipher.final('utf-8')
      return decrypted
  } catch (e) {
      return null
  }
}


module.exports = utils;