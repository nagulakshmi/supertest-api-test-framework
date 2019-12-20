describe('post /api/finelist', function () {
    it.only('it should return 404 mothod not found', function () {
        return dbConnection.excecuteQuery("select * from smart_fine where fine_user_id = 11357")
            .then(result => {
                return httprequest.httpGetRequest('/api/getfinelist')
                    .expect(404)
                    .send({"user_id": "11357" })
                    .then(response => {
                        assert.equal(response.body.code)
                    })
            })
    })

    it.only('it should return 404 mothod not found', function () {
        return dbConnection.excecuteQuery("select * from smart_fine where fine_user_id = 11357")
            .then(result => {
                return httprequest.httpPostRequest('/api/getfinlist')
                    .expect(404)
                    .send({"user_id": "11357" })
                    .then(response => {
                        assert.equal(response.body.code)
                    })
            })
    })
});