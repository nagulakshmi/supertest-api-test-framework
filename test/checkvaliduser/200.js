describe('POST  /api/checkvaliduser', function () {
  it('it should return as valid user', function () {
      return dbConnection.excecuteQuery("update users SET activate =1 where phone = '8754977907'")
    .then( result =>{
    return httprequest.httpPostRequest('/api/checkvaliduser')
    .send({"username":"8754977907","password":"123456" ,'activate':"1"})
    .expect(200)
    .then(response => {
        console.log(JSON.stringify(response.body));
      //assert.deepEqualExcludingEvery(response.body.result, result, ['hint', 'active'])
      assert.deepEqual(response.body,{"hint":"active","result":"active User","active":"true"})
      })
          })
    })
  });

  


