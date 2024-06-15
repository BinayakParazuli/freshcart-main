'use strict';

/**
 * all controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::all.all');
