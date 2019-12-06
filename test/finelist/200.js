describe('post /api/finelist',function(){
    it('it should return all fine list',function(){
        return dbConnection.excecuteQuery("select * from smart_fine where fine_user_id = 11357")
        .then(result => {
        //console.log(JSON.stringify(result.length));
          return httprequest.httpPostRequest('/api/getfinelist')
          .expect(200)
          .send({"user_id":"11357"})
          .then(response => {
           // console.log("response",response.body.result.length);
            assert.deepEqual(response.body.result.length, result.length)
          })
        })
     
        
    })
        

});