

var httpRequest = {
    httpGetRequest: function (url) {
        return request(util.getApiURL())
            .get(url)
            .set('Accept', 'application/json')
            .set('Authorization', util.getAccessToken());

    },

    httpPostRequest: function (url) {
        return request(util.getApiURL())
            .post(url)
            .set('Accept', 'application/json')
            .set('Authorization', util.getAccessToken());

    }
}

module.exports = httpRequest;