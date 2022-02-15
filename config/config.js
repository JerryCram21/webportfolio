const config = {};

config.server = {};

/* app settings */
config.server.port = process.env.PORT || 3000;
config.server.view = 'ejs';

module.exports = config;