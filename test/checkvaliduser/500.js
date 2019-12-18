describe('POST  /api/checkvaliduser', function () {
    it.only('it should return 500 Internal server error', function () {
      return dbConnection.excecuteQuery("update users SET activate =1 where phone = '8754977907'")
        .then(result => {
          return httprequest.httpPostRequest('/api/checkvaliduser')
            .send({ "username": "8754977907" })
            .expect(500)
            .then(response => {
                assert.equal(response.body.code)
            })
        })
    })

    it.only('it should return 500 Internal server error', function () {
        return dbConnection.excecuteQuery("update users SET activate =1 where phone = '8754977907'")
          .then(result => {
            return httprequest.httpPostRequest('/api/checkvaliduser')
              .send({ "password": "123456" })
              .expect(500)
              .then(response => {
                  assert.equal(response.body.code)
              })
          })
      })

      it.only('it should return 500 Internal server error', function () {
        return dbConnection.excecuteQuery("update users SET activate =1 where phone = '8754977907'")
          .then(result => {
            return httprequest.httpPostRequest('/api/checkvaliduser')
              .send()
              .expect(500)
              .then(response => {
                  assert.equal(response.body.code)
              })
          })
      })
  });