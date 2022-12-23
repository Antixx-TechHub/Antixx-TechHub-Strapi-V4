'use strict';

/**
 * screenshot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::screenshot.screenshot');
