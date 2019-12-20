describe('post /api/editprofile',function(){
    it.only('it should return 500 Internal server error',function(){
      return httprequest.httpPostRequest('/api/editprofile')
      .send({"phone":"8056665041","division":"6","address":"RMS colony","wardno":"20"})
      .expect(500)
      .then(response =>{
        //console.Console(response.body.code);
        assert.equal(response.body.code)
      })
    })
  });

  