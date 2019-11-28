describe('post /api/otpverification',function(){
    it('it should return valid otp sucessfully verified',function(){
      return httprequest.httpPostRequest('/api/forgotpasswordcheckotp')
      .send({"phone":"8754977907","otp":"9175"})
      .expect(200)
      .then(response =>{
        console.log(JSON.stringify(response.body));
        assert.deepEqual(response.body,{"success":"true","result":"OTP Verified Successfully"})
      })
    })
 
      it('it should return invalid otp',function(){
            return httprequest.httpPostRequest('/api/forgotpasswordcheckotp')
            .send({"phone" :"8754977907","otp":"9173"})
            .expect(200)
          .then(response => {
            //console.log("hello");
           console.log(JSON.stringify(response.body));
           //assert.deepEqualExcludingEvery(response.body.result, result, ['hint', 'active'])
            assert.deepEqual(response.body,{"success":"false","result":"Invalid OTP Number"})
           })
    
  })
});