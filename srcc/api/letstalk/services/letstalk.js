'use strict';

/**
 * letstalk service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::letstalk.letstalk');
