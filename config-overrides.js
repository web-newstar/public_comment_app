const { injectBabelPlugin } = require('react-app-rewired');
console.log(injectBabelPlugin)
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    return config;
};