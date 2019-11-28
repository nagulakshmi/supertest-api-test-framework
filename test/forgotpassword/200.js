describe('post /api/forgotpassword',function(){
    it('it should return otp number',function(){
        return(httprequest.httpPostRequest('/api/forgotpassword'))
        .send({"phone":"8754977907"})
        .expect(200)
        .then(response =>{
        console.log(JSON.stringify(response.body));
        assert.deepEqual(response.body,{"success":"true","result":"OTP Number Sent"})
      })
    })

    it('it should return  invalid number please enter registered mobile number',function(){
        return(httprequest.httpPostRequest('/api/forgotpassword'))
        .send({"phone":"8754977905"})
        .expect(200)
        .then(response =>{
        console.log(JSON.stringify(response.body));
        assert.deepEqual(response.body,{"success":"false","result":"Please enter registered mobile number"})
      })
    })
});
