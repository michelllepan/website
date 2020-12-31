module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"typekit":{}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"michelllepan","short_name":"michelle","start_url":"/","background_color":"#f58167","theme_color":"#f58167","display":"minimal-ui","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
