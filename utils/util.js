
var config = require('config');
var authentication_token = null;


var util = {
    setAccessToken: function (token) {
        //console.log("Received Access Token :", token)
        authentication_token = `Bearer ` + token;

    },

    getAccessToken: function () {
        //console.log("Return Access Token :", authentication_token)
        return authentication_token
    },

    getApiURL: function () {
       // console.log("config", config);
        return config.apiURL;
    }
}



module.exports = util;