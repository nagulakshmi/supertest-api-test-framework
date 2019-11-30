describe('post /api/getwardlist',function(){
    it.only('it should return ward list',function(){
    return dbConnection.excecuteQuery("select ward_no from smart_ward where did = 1")
    .then(result => {
        console.log(JSON.stringify(result));
      return httprequest.httpPostRequest('/api/getwardslist')
      .expect(200)
      .send({"id":"1"})
      .then(response => {
        console.log("response",response.body);
        assert.deepEqual(response.body.result,result)
      })
    })
})
        
    
});