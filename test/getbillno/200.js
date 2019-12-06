

describe('post devisionlist',function(){
    it('it should return division list',function(){
    return dbConnection.excecuteQuery("select * from smart_division")
    .then(result => {
    console.log(JSON.stringify(result.length));
      return httprequest.httpGetRequest('/api/getdivisionlist')
      .expect(200)
      .then(response => {
        // console.log('result', response);
        console.log("response",response.body.result.length);
        assert.deepEqual(response.body.result.length, result.length)
      })
    })
  })
});

