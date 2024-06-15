'use strict';

/**
 * all service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all.all');
