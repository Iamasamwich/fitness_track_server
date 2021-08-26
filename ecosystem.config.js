module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
