describe('post /api/signupnew',function(){
    it('it should return phone number and email already Registered',function(){
      return httprequest.httpPostRequest('/api/signupnew')
      .send({"role":"5","username":"selva","phone" :"8754977907","email":"rajspselva@gmail.com","address":"rajacolony","password":"123456","division":"1","wardno":"1","activate":"1","access":"","department":"1","otp_number":"","mid":""})
      .expect(200)
      .then(response =>{
        console.log(JSON.stringify(response.body));
        assert.deepEqual(response.body,{"success":"false","result":"Phone Number or Email Already Registered"})
      })
    })
 
      it('it should return data sucessfully inserted',function(){
        return dbConnection.excecuteQuery("delete from users where phone = '8754977907'")
        .then( result =>{
            return httprequest.httpPostRequest('/api/signupnew')
            .send({"role":"5","username":"selva","phone" :"8754977907","email":"rajspselva@gmail.com","address":"rajacolony","password":"123456","division":"1","wardno":"1","activate":"1","access":"","department":"1","otp_number":"","mid":""})
            .expect(200)
          .then(response => {
            //console.log("hello");
           console.log(JSON.stringify(response.body));
           //assert.deepEqualExcludingEvery(response.body.result, result, ['hint', 'active'])
            assert.deepEqual(response.body,{"success":"true","result":"Inserted Successfully"})
           })
      })
  })
});

