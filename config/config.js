const config = {};

config.server = {};

/* app settings */
config.server.port = process.env.PORT || 3000;
//config.server.port = 3001; //local only
config.server.view = 'ejs';

module.exports = config;