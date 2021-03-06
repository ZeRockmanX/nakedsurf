'use strict';

const joi         = require('../../../index').Utility.joi;
const joiValidate = require('../../../index').Utility.joiValidate;

class GetTestInfo {

  constructor() {
    this.method     = 'get';
    this.uri        = '/getTestInfo/:offset/:limit';
    this.type       = 'application/json; charset=utf-8';
    this.enableJWT  = false; 
    this.schema     = joi.object().keys({
      offset: joi.number().required(),
      limit:  joi.number().required()
    });
  }

  register() {
    return [this.uri, validate, execute];
  }

  server(params) {
    return new Promise((resolve, reject) => {
      resolve({})
    });
  }
}

function *validate(next) {
  
  let aggregatedParams = Object.assign({}, this.params, this.query, this.request.body);
  try { 
    yield joiValidate(aggregatedParams, api.schema, { allowUnknown: true });
    yield next;
  } catch (err) {
    this.body = err.toString();
  }
}

function *execute(next) {
  this.body = {username: 1234};
}

const api = new GetTestInfo();

module.exports = api;